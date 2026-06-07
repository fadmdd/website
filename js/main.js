(function () {
  'use strict';

  // ── State ────────────────────────────────────────────────
  let currentIndex = 0;
  const mediaIndices = artworks.map(() => 0);

  // ── Elements ─────────────────────────────────────────────
  const artworksEl    = document.getElementById('artworks');
  const navEl         = document.getElementById('nav');
  const infoEl        = document.getElementById('artwork-info');
  const titleEl       = document.getElementById('artwork-title');
  const yearEl        = document.getElementById('artwork-year');
  const materialsEl   = document.getElementById('artwork-materials');
  const dimensionsEl  = document.getElementById('artwork-dimensions');
  const bottomRight   = document.getElementById('bottom-right');
  const btnFS         = document.getElementById('btn-fullscreen');
  const btnFSText     = document.getElementById('btn-fullscreen-text');
  const arrowL        = document.getElementById('arrow-left');
  const arrowR        = document.getElementById('arrow-right');
  const overlayImage  = document.getElementById('overlay-image');
  const overlayImg    = document.getElementById('overlay-img');
  const overlayVimeo  = document.getElementById('overlay-vimeo');
  const vimeoIframe   = document.getElementById('vimeo-iframe');
  const btnCloseVimeo = document.getElementById('btn-close-vimeo');
  const overlayVideo  = document.getElementById('overlay-video');
  const overlayPlayer = document.getElementById('overlay-video-player');
  const btnCloseVideo = document.getElementById('btn-close-video');
  const aboutLink     = document.getElementById('about-link');

  const uiElements = [navEl, infoEl, bottomRight];

  // ── Build DOM ────────────────────────────────────────────
  function buildArtworks() {
    artworks.forEach((artwork, i) => {
      const section = document.createElement('section');
      section.className = 'artwork';
      section.dataset.index = i;
      if (artwork.bg) section.style.background = artwork.bg;

      const track = document.createElement('div');
      track.className = 'media-track';

      artwork.media.forEach((item, j) => {
        const wrap = document.createElement('div');
        wrap.className = 'media-item';

        if (item.type === 'image') {
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = artwork.title;
          img.loading = j === 0 && i === 0 ? 'eager' : 'lazy';
          img.draggable = false;
          if (artwork.bg) img.style.objectFit = 'contain';
          wrap.appendChild(img);
          wrap.addEventListener('click', () => { if (i === currentIndex) enterFullscreen(); });
        } else if (item.type === 'video') {
          const vid = document.createElement('video');
          vid.src = item.src;
          if (item.poster) vid.poster = item.poster;
          vid.autoplay = true;
          vid.muted = true;
          vid.loop = false;
          vid.playsInline = true;
          vid.preload = 'auto';
          vid.setAttribute('playsinline', '');
          vid.addEventListener('timeupdate', function () {
            if (this.duration && this.currentTime > this.duration - 0.25) {
              this.currentTime = 0;
            }
          });
          wrap.appendChild(vid);
          wrap.addEventListener('click', () => { if (i === currentIndex) enterFullscreen(); });
        } else if (item.type === 'vimeo') {
          const match = item.src.match(/vimeo\.com\/(\d+)/);
          if (match) {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://player.vimeo.com/video/' + match[1] +
              '?background=1&autoplay=1&loop=1&muted=1';
            iframe.frameBorder = '0';
            iframe.setAttribute('allow', 'autoplay; fullscreen');
            iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;position:absolute;inset:0;';
            wrap.style.position = 'relative';
            wrap.appendChild(iframe);
            const clickLayer = document.createElement('div');
            clickLayer.style.cssText = 'position:absolute;inset:0;cursor:pointer;';
            clickLayer.addEventListener('click', () => { if (i === currentIndex) enterFullscreen(); });
            wrap.appendChild(clickLayer);
          }
        }

        track.appendChild(wrap);
      });

      let scrollTimer = null;
      track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (!track.clientWidth) return;
          const newMIdx = Math.round(track.scrollLeft / track.clientWidth);
          const oldMIdx = mediaIndices[i];
          if (newMIdx === oldMIdx) return;

          const items = track.querySelectorAll('.media-item');
          items[oldMIdx]?.querySelector('video')?.pause();
          items[newMIdx]?.querySelector('video')?.play().catch(() => {});

          mediaIndices[i] = newMIdx;
          if (i === currentIndex) updateUI();
        }, 80);
      }, { passive: true });

      section.appendChild(track);
      artworksEl.appendChild(section);
    });
  }

  // ── UI update ─────────────────────────────────────────────
  function updateUI() {
    const artwork = artworks[currentIndex];
    const mIdx    = mediaIndices[currentIndex];
    const total   = artwork.media.length;

    if (artwork.link) {
      titleEl.innerHTML =
        '<a class="artwork-title-link" href="' + artwork.link + '">' +
        artwork.title +
        '<svg class="link-icon" width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">' +
        '<path d="M1.5 8L7.5 1.5M7.5 1.5H3.5M7.5 1.5V5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
        '</a>';
    } else {
      titleEl.textContent = artwork.title;
    }
    yearEl.textContent       = artwork.year       || '';
    materialsEl.textContent  = artwork.materials  || '';
    dimensionsEl.textContent = artwork.dimensions || '';

    // Theme and background colour
    document.body.classList.toggle('theme-bright', artwork.theme === 'bright');
    document.body.style.background = artwork.bg || '#000';

    // Merged button: show "full video" text when artwork has a Vimeo link
    btnFSText.textContent = artwork.videoLink ? 'full video' : '';

    arrowL.classList.toggle('visible', total > 1 && mIdx > 0);
    arrowR.classList.toggle('visible', total > 1 && mIdx < total - 1);
  }

  // ── Media navigation ──────────────────────────────────────
  function navigateMedia(dir) {
    const artwork = artworks[currentIndex];
    const current = mediaIndices[currentIndex];
    const next    = current + dir;

    if (next < 0 || next >= artwork.media.length) return;

    const sections = artworksEl.querySelectorAll('.artwork');
    const track    = sections[currentIndex].querySelector('.media-track');
    const items    = track.querySelectorAll('.media-item');

    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });

    items[current].querySelector('video')?.pause();
    items[next].querySelector('video')?.play().catch(() => {});

    mediaIndices[currentIndex] = next;
    updateUI();
  }

  // ── Intersection observer ─────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const newIndex = parseInt(entry.target.dataset.index, 10);
      if (newIndex === currentIndex) return;

      const prevIndex = currentIndex;
      currentIndex    = newIndex;

      const allSections = artworksEl.querySelectorAll('.artwork');

      allSections[prevIndex]
        ?.querySelectorAll('.media-item')[mediaIndices[prevIndex]]
        ?.querySelector('video')?.pause();

      allSections[currentIndex]
        ?.querySelectorAll('.media-item')[mediaIndices[currentIndex]]
        ?.querySelector('video')?.play().catch(() => {});

      updateUI();
    });
  }, { root: artworksEl, threshold: 0.55 });

  // ── Show / hide UI ─────────────────────────────────────────
  function hideUIElements() {
    uiElements.forEach(el => el.classList.add('ui-hidden'));
    arrowL.classList.add('ui-hidden');
    arrowR.classList.add('ui-hidden');
  }

  function showUIElements() {
    uiElements.forEach(el => el.classList.remove('ui-hidden'));
    arrowL.classList.remove('ui-hidden');
    arrowR.classList.remove('ui-hidden');
    updateUI();
  }

  // ── Merged fullscreen button ───────────────────────────────
  // If artwork has a videoLink → open Vimeo overlay.
  // Otherwise → show image or local video fullscreen.
  function enterFullscreen() {
    const artwork = artworks[currentIndex];
    const media   = artwork.media[mediaIndices[currentIndex]];

    if (artwork.videoLink) {
      openVimeo();
      return;
    }

    if (media.type === 'image') {
      overlayImg.src = media.src;
      overlayImage.style.background = artwork.bg || '#000';
      overlayImage.classList.add('active');
      hideUIElements();
    } else if (media.type === 'video') {
      overlayPlayer.src = media.src;
      overlayPlayer.loop = media.loop !== false;
      overlayPlayer.currentTime = 0;
      overlayVideo.style.background = artwork.bg || '#000';
      overlayVideo.classList.add('active');
      overlayPlayer.play().catch(() => {});
      hideUIElements();
    }
  }

  function exitImageFS() {
    overlayImage.classList.remove('active');
    overlayImg.src = '';
    showUIElements();
  }

  function exitVideoFS() {
    overlayVideo.classList.remove('active');
    overlayPlayer.pause();
    overlayPlayer.src = '';
    showUIElements();
  }

  // ── Vimeo overlay ─────────────────────────────────────────
  function openVimeo() {
    const artwork = artworks[currentIndex];
    if (!artwork.videoLink) return;
    const match = artwork.videoLink.match(/vimeo\.com\/(\d+)/);
    if (!match) return;
    vimeoIframe.src = 'https://player.vimeo.com/video/' + match[1] +
      '?autoplay=1&title=0&byline=0&portrait=0';
    overlayVimeo.style.background = artwork.bg || '#000';
    overlayVimeo.classList.add('active');
    hideUIElements();
  }

  function closeVimeo() {
    overlayVimeo.classList.remove('active');
    vimeoIframe.src = '';
    showUIElements();
  }

  // ── Keyboard ───────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  navigateMedia(-1);
    if (e.key === 'ArrowRight') navigateMedia(1);
    if (e.key === 'Escape') { exitImageFS(); exitVideoFS(); closeVimeo(); }
    if (e.key === 'f' || e.key === 'F') enterFullscreen();
  });

  // ── Event listeners ────────────────────────────────────────
  arrowL.addEventListener('click', () => navigateMedia(-1));
  arrowR.addEventListener('click', () => navigateMedia(1));
  btnFS.addEventListener('click', enterFullscreen);
  overlayImage.addEventListener('click', exitImageFS);
  btnCloseVideo.addEventListener('click', exitVideoFS);
  btnCloseVimeo.addEventListener('click', closeVimeo);

  aboutLink.addEventListener('click', () => {
    sessionStorage.setItem('returnIndex', currentIndex);
  });

  // ── Init ───────────────────────────────────────────────────
  function init() {
    buildArtworks();
    document.querySelectorAll('.artwork').forEach(s => observer.observe(s));

    const saved = sessionStorage.getItem('returnIndex');
    if (saved !== null) {
      sessionStorage.removeItem('returnIndex');
      const idx = parseInt(saved, 10);
      const sections = artworksEl.querySelectorAll('.artwork');
      if (sections[idx]) {
        requestAnimationFrame(() => {
          sections[idx].scrollIntoView({ behavior: 'instant' });
          currentIndex = idx;
          updateUI();
        });
        return;
      }
    }

    updateUI();
  }

  init();
}());
