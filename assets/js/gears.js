const gearSets = {
   start: {
      bgType: 'image', // 'color' or 'image'
      bgValue: 'assets/images/bg/bg-purple-gear.png',
      items: {
         weapon: 'assets/images/gears/Equip_Weapon_3_Icon_Elite.png',
         necklace: 'assets/images/gears/Equip_Necklace_7_Icon_Elite.png',
         gloves: 'assets/images/gears/Equip_Gloves_1_Icon_Elite.png',
         armor: 'assets/images/gears/Equip_Armor_8_Icon_Elite.png',
         belt: 'assets/images/gears/Equip_Belt_6_Icon_Elite.png',
         shoes: 'assets/images/gears/Equip_Shoe_7_Icon_Elite.png'
      }
   },
   advanced: {
      bgType: 'image',
      bgValue: 'assets/images/bg/bg-yellow-gear.png',
      items: {
         weapon: 'assets/images/gears/Equip_Weapon_3_Icon_Elite.png',
         necklace: 'assets/images/gears/Equip_Necklace_8_Icon_Elite.png',
         gloves: 'assets/images/gears/Equip_Gloves_1_Icon_Elite.png',
         armor: 'assets/images/gears/Equip_Armor_8_Icon_Elite.png',
         belt: 'assets/images/gears/Equip_Belt_8_Icon_Elite.png',
         shoes: 'assets/images/gears/Equip_Shoe_7_Icon_Elite.png'
      }
   },
   target: {
      bgType: 'image',
      bgValue: 'assets/images/bg/bg-red-gear.png',
      items: {
         weapon: 'assets/images/gears/Equip_Weapon_8_Icon_Elite.png',
         necklace: 'assets/images/gears/Equip_Necklace_8_Icon_Elite.png',
         gloves: 'assets/images/gears/Equip_Gloves_7_Icon_Elite.png',
         armor: 'assets/images/gears/Equip_Armor_7_Icon_Elite.png',
         belt: 'assets/images/gears/Equip_Belt_8_Icon_Elite.png',
         shoes: 'assets/images/gears/Equip_Shoe_8_Icon_Elite.png'
      }
   }
};

const slotIds = ['weapon', 'necklace', 'gloves', 'armor', 'belt', 'shoes'];

function setGearMode(mode) {
   const config = gearSets[mode];
   if (!config) return;

   // Update Buttons
   document.querySelectorAll('[id^="btn-"]').forEach(btn => {
      btn.classList.remove('active', 'btn-light');
      btn.classList.add('btn-outline-light');
   });
   const activeBtn = document.getElementById(`btn-${mode}`);
   if (activeBtn) {
      activeBtn.classList.remove('btn-outline-light');
      activeBtn.classList.add('btn-light', 'active');
   }

   // Update Slots
   slotIds.forEach(slot => {
      const slotEl = document.getElementById(`slot-${slot}`);
      if (!slotEl) return;

      // Update Background
      const bgEl = slotEl.querySelector('.gear-bg');
      if (bgEl) {
         if (config.bgType === 'color') {
            bgEl.style.backgroundImage = 'none';
            bgEl.style.backgroundColor = config.bgValue;
         } else {
            bgEl.style.backgroundColor = 'transparent';
            bgEl.style.backgroundImage = `url('${config.bgValue}')`;
         }
      }

      // Update Icon
      const iconEl = slotEl.querySelector('.gear-icon');
      if (iconEl) {
         iconEl.src = config.items[slot] || '';
      }
   });
}

// Initialize with Start
document.addEventListener('DOMContentLoaded', () => {
   // Wait for modal to be ready? Or just init.
   // We can init immediately if elements exist, but modal content might be hidden.
   // It's fine to update the DOM elements even if hidden.
   setGearMode('start');
});
