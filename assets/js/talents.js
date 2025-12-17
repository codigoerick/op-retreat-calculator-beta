
// ==========================================
// CONFIGURATIONS
// Pegar aquí las configuraciones para 90, 100, 120, 130
// ==========================================
const talentConfigs = {
   80: {
      1: [5, 5, 0], 2: [5, 1, 0], 3: [0, 1, 1], 4: [0, 1, 0], 5: [0, 5, 5],
      6: [5, 1, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [1, 0, 1], 10: [0, 1, 1],
      11: [5, 5, 0], 12: [0, 1, 0], 13: [0, 1, 0], 14: [0, 5, 0], 15: [0, 1, 1],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 1, 1], 19: [0, 1, 0], 20: [0, 5, 0],
      21: [0, 1, 0], 22: [0, 1, 1], 23: [1]
   },
   90: {
      1: [5, 5, 0], 2: [5, 1, 0], 3: [0, 1, 1], 4: [0, 1, 0], 5: [0, 5, 5],
      6: [5, 1, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [1, 0, 1], 10: [0, 1, 1],
      11: [5, 5, 0], 12: [0, 5, 0], 13: [0, 1, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 1, 1], 19: [1, 1, 1], 20: [0, 5, 0],
      21: [0, 1, 0], 22: [0, 1, 1], 23: [1]
   },
   100: {
      1: [5, 5, 0], 2: [5, 1, 0], 3: [0, 1, 1], 4: [0, 1, 0], 5: [5, 5, 5],
      6: [5, 1, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [1, 0, 1], 10: [0, 1, 1],
      11: [5, 5, 0], 12: [0, 5, 0], 13: [0, 1, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 1, 1], 19: [1, 1, 5], 20: [0, 5, 0],
      21: [1, 1, 0], 22: [0, 1, 1], 23: [1]
   },
   110: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 1, 1], 5: [5, 5, 5],
      6: [5, 1, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [1, 0, 1], 10: [0, 1, 1],
      11: [5, 5, 0], 12: [0, 5, 0], 13: [0, 2, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 1, 5], 19: [1, 1, 5], 20: [0, 5, 0],
      21: [1, 1, 0], 22: [0, 1, 1], 23: [1]
   },
   120: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 1, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [3, 0, 1], 10: [0, 1, 5],
      11: [5, 5, 0], 12: [0, 5, 0], 13: [0, 2, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 1, 5], 19: [1, 1, 5], 20: [0, 5, 0],
      21: [1, 1, 0], 22: [0, 1, 1], 23: [1]
   },
   130: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 1, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 1], 10: [0, 1, 5],
      11: [5, 5, 0], 12: [0, 5, 1], 13: [0, 2, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 0, 5], 19: [5, 1, 5], 20: [0, 5, 0],
      21: [1, 1, 0], 22: [0, 5, 1], 23: [1]
   },
   140: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 3, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 1], 10: [0, 1, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 2, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [0, 0, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [1, 1, 0], 22: [0, 5, 1], 23: [1]
   },
   150: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 3, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 1], 10: [0, 1, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 5, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 1, 1], 17: [1, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [1, 5, 0], 22: [0, 5, 1], 23: [1]
   },
   160: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 1], 4: [0, 3, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 5], 10: [0, 5, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 5, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 0, 1], 17: [5, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [1, 5, 0], 22: [0, 5, 0], 23: [1]
   },
   170: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 3], 4: [0, 5, 1], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 5], 10: [0, 5, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 5, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 5, 1], 17: [5, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [1, 5, 1], 22: [0, 5, 0], 23: [1]
   },
   180: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 5], 4: [0, 5, 5], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 1], 9: [5, 0, 5], 10: [0, 5, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 5, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 5, 1], 17: [5, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [5, 5, 1], 22: [0, 5, 0], 23: [1]
   },
   190: {
      1: [5, 5, 0], 2: [5, 5, 0], 3: [0, 1, 5], 4: [0, 5, 5], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 0], 8: [1, 1, 5], 9: [5, 0, 5], 10: [0, 5, 5],
      11: [5, 5, 0], 12: [0, 5, 5], 13: [0, 5, 0], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 5, 3], 17: [5, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 0],
      21: [5, 5, 5], 22: [0, 5, 0], 23: [1]
   },
   200: {
      1: [5, 5, 0], 2: [5, 5, 1], 3: [0, 1, 5], 4: [3, 5, 5], 5: [5, 5, 5],
      6: [5, 5, 0], 7: [0, 1, 1], 8: [1, 1, 5], 9: [5, 0, 5], 10: [0, 5, 5],
      11: [5, 5, 0], 12: [1, 5, 5], 13: [0, 5, 1], 14: [0, 5, 0], 15: [0, 1, 5],
      16: [0, 5, 3], 17: [5, 1, 5], 18: [0, 0, 5], 19: [5, 5, 5], 20: [0, 5, 1],
      21: [5, 5, 5], 22: [0, 5, 0], 23: [3]
   }
};

function clearOverlays() {
   const overlays = document.querySelectorAll('.talent-overlay');
   overlays.forEach(el => el.remove());

   const talentNodes = document.querySelectorAll('.talent-node');
   talentNodes.forEach(node => {
      // Reset Item Opacity
      const img = node.querySelector('img.z-1');
      if (img) img.style.opacity = '1';

      // Reset Background Brightness
      const bgDiv = node.querySelector('div.position-absolute.top-0');
      if (bgDiv) {
         bgDiv.style.filter = 'none';
      }
   });
}

function applyLock(node) {
   if (node.querySelector('.lock-overlay')) return;

   // 1. Create Lock Overlay
   const lockOverlay = document.createElement('div');
   lockOverlay.className = 'position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center talent-overlay lock-overlay';
   lockOverlay.style.zIndex = '2';
   // User requested lighter/transparent lock maybe? "perfecto" so leaving as is.

   // 2. Dim Main Icon
   const mainImg = node.querySelector('img.z-1');
   if (mainImg) mainImg.style.opacity = '0.5';

   // 3. Dim Background (New Request)
   const bgDiv = node.querySelector('div.position-absolute.top-0');
   if (bgDiv) {
      // Darken the background significantly to indicate locked state
      bgDiv.style.filter = 'brightness(0.4) grayscale(0.5)';
   }

   const lockImg = document.createElement('img');
   lockImg.src = 'assets/images/icons/lock.webp';
   lockImg.style.width = '50%';
   lockImg.style.height = '50%';
   lockImg.style.objectFit = 'contain';

   lockOverlay.appendChild(lockImg);
   node.appendChild(lockOverlay);
}

function applyLevels(node, levelCount) {
   if (levelCount <= 0) {
      applyLock(node);
      return;
   }

   const levelOverlay = document.createElement('div');
   levelOverlay.className = 'position-absolute bottom-0 start-0 w-100 d-flex justify-content-center talent-overlay level-overlay';
   levelOverlay.style.zIndex = '2';

   // Wrapper for background and spacing
   const iconsWrapper = document.createElement('div');
   iconsWrapper.className = 'd-flex align-items-center justify-content-center';
   iconsWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
   iconsWrapper.style.width = '100%'; // Full width
   iconsWrapper.style.gap = '2px'; // Small separation
   iconsWrapper.style.padding = '2px 0'; // Vertical padding for bar height

   for (let i = 0; i < levelCount; i++) {
      const lvlIcon = document.createElement('img');
      lvlIcon.src = 'assets/images/icons/talent-level.webp';
      lvlIcon.style.width = '10px';
      lvlIcon.style.height = '10px';
      // Removed negative margin
      iconsWrapper.appendChild(lvlIcon);
   }

   levelOverlay.appendChild(iconsWrapper);
   node.appendChild(levelOverlay);
}


function calculateActiveStars(configKey) {
   const configData = talentConfigs[configKey];
   if (!configData) return 0;

   let total = 0;
   // Iterate over configured rows
   for (const row in configData) {
      if (configData.hasOwnProperty(row)) {
         const cols = configData[row];
         if (Array.isArray(cols)) {
            cols.forEach(lvl => total += lvl);
         }
      }
   }
   return total;
}

function updateStarCounter(active, configValue) {
   const display = document.getElementById('star-count-text');
   if (display) {
      display.textContent = `${active} / ${configValue}`;
   }
}

function renderGrid(configKey) {
   clearOverlays();

   const configData = talentConfigs[configKey];
   if (!configData || Object.keys(configData).length === 0) {
      console.warn(`Configuration for ${configKey} is empty or missing.`);
      alert(`Configuración ${configKey} aún no implementada.`);
      resetGrid();
      return;
   }

   const rows = document.querySelectorAll('.card-body .d-flex.flex-column > .d-flex');

   rows.forEach((row, index) => {
      const rowNum = index + 1;
      const rowConfig = configData[rowNum];

      if (!rowConfig) {
         const nodes = row.querySelectorAll('.talent-node');
         nodes.forEach(node => applyLock(node));
         return;
      }

      const nodes = row.querySelectorAll('.talent-node');
      nodes.forEach((node, colIndex) => {
         const level = rowConfig[colIndex] !== undefined ? rowConfig[colIndex] : 0;
         applyLevels(node, level);
      });
   });

   // Update Counter
   const active = calculateActiveStars(configKey);
   updateStarCounter(active, configKey);
}

function resetGrid() {
   clearOverlays();
   const nodes = document.querySelectorAll('.talent-node');
   nodes.forEach(node => applyLock(node));
   updateStarCounter(0, '---');
}

document.addEventListener('DOMContentLoaded', () => {
   const buttons = document.querySelectorAll('[data-talent-config]');
   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         const config = btn.getAttribute('data-talent-config');
         renderGrid(config);
      });
   });

   const btnReset = document.getElementById('btn-reset');
   if (btnReset) btnReset.addEventListener('click', resetGrid);

   resetGrid();
});
