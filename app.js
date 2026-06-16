/**
 * A2B Refurbished Laptops Store - Application Engine
 */

const LAPTOP_DATA = [
  {
    id: 1,
    brand: "Apple",
    model: "MacBook Pro 14\"",
    title: "Apple MacBook Pro 14\" (M2 Pro, 16GB RAM, 512GB SSD) - Space Gray",
    price: 129999,
    originalPrice: 169999,
    rating: 4.8,
    reviewCount: 28,
    condition: "like-new",
    conditionText: "Like New (9.8/10)",
    image: "assets/macbook.png",
    specs: {
      "Processor": "Apple M2 Pro (10-core CPU, 16-core GPU)",
      "Memory": "16GB Unified Memory",
      "Storage": "512GB Super-Fast NVMe SSD",
      "Display": "14.2\" Liquid Retina XDR (3024 x 1964), 120Hz ProMotion",
      "Operating System": "macOS Sonoma (Upgradable)",
      "Battery Life": "Up to 18 Hours (Battery Health at 96%)",
      "Cosmetic Details": "Pristine keyboard deck. Zero screen scuffs. Shell shows no wear.",
      "Accessories Included": "Original Apple 67W USB-C Charger & MagSafe 3 Cable",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "Sidarth S.", date: "2026-05-12", rating: 5, title: "Absolutely brand new condition", comment: "I was skeptical about buying a refurbished laptop, but this is literally brand new. No scratches, battery health at 96% as promised. Best purchase!" },
      { author: "Priyah K.", date: "2026-04-20", rating: 5, title: "Insane Value", comment: "Super fast shipping. Saved ₹40,000 compared to a retail Apple Store. M2 Pro chip compiles all my code in seconds." },
      { author: "Michael B.", date: "2026-03-15", rating: 4, title: "Great laptop, original box missing", comment: "Product works perfectly, looks flawless. Just note it comes in A2B premium cardboard box, not the original Apple packaging. Accessories are original." }
    ]
  },
  {
    id: 2,
    brand: "Dell",
    model: "XPS 15 9530",
    title: "Dell XPS 15 9530 (Intel i9, 32GB RAM, 1TB SSD, RTX 4060) - Silver",
    price: 114999,
    originalPrice: 159999,
    rating: 4.7,
    reviewCount: 19,
    condition: "excellent",
    conditionText: "Excellent (9.2/10)",
    image: "assets/dell_xps.png",
    specs: {
      "Processor": "Intel Core i9-13900H (14-Core, Up to 5.4GHz)",
      "Memory": "32GB DDR5 Dual-Channel RAM",
      "Storage": "1TB PCIe Gen4 NVMe M.2 SSD",
      "Display": "15.6\" OLED 3.5K (3456 x 2160) InfinityEdge Touchscreen",
      "GPU / Graphics": "NVIDIA GeForce RTX 4060 (8GB GDDR6)",
      "Operating System": "Windows 11 Pro",
      "Battery Life": "Up to 7 Hours (Battery Health at 91%)",
      "Cosmetic Details": "Very minor scuff on the bottom corner shell. Interior keyboard and screen are flawless.",
      "Accessories Included": "Dell 130W Type-C AC Adapter",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "Rohit M.", date: "2026-05-30", rating: 5, title: "The OLED display is gorgeous", comment: "Screen looks incredible. Solid performance for video editing and programming. Minor scratch on the bottom plate but invisible when using." },
      { author: "Ashley D.", date: "2026-05-01", rating: 4, title: "Beast of a laptop", comment: "i9 processor with RTX 4060 does wonders for graphics projects. Battery health is decent. Keyboard feels so comfortable." }
    ]
  },
  {
    id: 3,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon Gen 10",
    title: "Lenovo ThinkPad X1 Carbon Gen 10 (Intel i7, 16GB RAM, 512GB SSD) - Black",
    price: 64999,
    originalPrice: 119999,
    rating: 4.6,
    reviewCount: 32,
    condition: "good",
    conditionText: "Good (8.5/10)",
    image: "assets/thinkpad.png",
    specs: {
      "Processor": "Intel Core i7-1260P vPro (12-Core, Up to 4.7GHz)",
      "Memory": "16GB LPDDR5 RAM",
      "Storage": "512GB PCIe NVMe SSD",
      "Display": "14\" WUXGA IPS Anti-Glare (1920 x 1200)",
      "Operating System": "Windows 11 Pro",
      "Battery Life": "Up to 9 Hours (Battery Health at 88%)",
      "Cosmetic Details": "Light cosmetic shine on keyboard spacebar and touchpad. Shell has tiny micro-scratches.",
      "Accessories Included": "Lenovo 65W Rapid Charger",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "David E.", date: "2026-06-02", rating: 5, title: "Classic ThinkPad Durability", comment: "Keyboard is out of this world, carbon fiber build feels lightweight. Super reliable for my everyday business workflow." },
      { author: "Aravind R.", date: "2026-04-18", rating: 4, title: "Decent price for solid business unit", comment: "Runs Linux perfectly. There is some slight key wear but nothing that affects typing. A2B certified quality is trustworthy." }
    ]
  },
  {
    id: 4,
    brand: "ASUS",
    model: "ROG Zephyrus G14",
    title: "ASUS ROG Zephyrus G14 (AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060) - Moonlight White",
    price: 79999,
    originalPrice: 109999,
    rating: 4.5,
    reviewCount: 24,
    condition: "excellent",
    conditionText: "Excellent (9.0/10)",
    image: "assets/asus_rog.png",
    specs: {
      "Processor": "AMD Ryzen 9 5900HS (8-Core, Up to 4.6GHz)",
      "Memory": "16GB DDR4 Dual-Channel RAM",
      "Storage": "1TB M.2 NVMe SSD",
      "Display": "14\" QHD IPS (2560 x 1440), 120Hz Refresh Rate",
      "GPU / Graphics": "NVIDIA GeForce RTX 3060 (6GB GDDR6)",
      "Operating System": "Windows 11 Home",
      "Battery Life": "Up to 6 Hours (Battery Health at 90%)",
      "Cosmetic Details": "Extremely clean condition, only tiny paint fleck on the rear exhaust grille.",
      "Accessories Included": "ASUS 180W Smart AC Power Adapter",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "Karan P.", date: "2026-05-25", rating: 5, title: "Portable gaming beast!", comment: "Amazing frame rates in Valorant and Cyberpunk. The screen resolution is super sharp and the laptop is surprisingly compact." },
      { author: "Sarah T.", date: "2026-05-09", rating: 4, title: "Very clean gamer laptop", comment: "A2B repasted the cooling system because temperatures stay below 80C under heavy gaming load. Incredible job. Recommended." }
    ]
  },
  {
    id: 5,
    brand: "HP",
    model: "Spectre x360",
    title: "HP Spectre x360 2-in-1 Touch (Intel i7, 16GB RAM, 512GB SSD) - Nightfall Black",
    price: 69999,
    originalPrice: 104999,
    rating: 4.4,
    reviewCount: 15,
    condition: "like-new",
    conditionText: "Like New (9.5/10)",
    image: "assets/hp_spectre.png",
    specs: {
      "Processor": "Intel Core i7-1355U (10-Core, Up to 5.0GHz)",
      "Memory": "16GB LPDDR5 RAM",
      "Storage": "512GB PCIe Gen4 NVMe SSD",
      "Display": "13.5\" WUXGA+ (1920 x 1280) IPS Touchscreen, 360-degree rotation",
      "Operating System": "Windows 11 Home",
      "Battery Life": "Up to 11 Hours (Battery Health at 94%)",
      "Cosmetic Details": "No noticeable dents or scratches. Beautiful gem-cut brass accents are shiny.",
      "Accessories Included": "HP 65W Type-C Power Adapter and HP Stylus Rechargeable Pen",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "Jasmine L.", date: "2026-06-11", rating: 5, title: "Beautiful 2-in-1", comment: "Using it for drawing and streaming. The HP Pen works flawlessly. Great battery life and fold mechanism is robust." },
      { author: "Robert G.", date: "2026-04-28", rating: 4, title: "Very sleek convertible", comment: "Looks incredibly expensive and luxurious. Display is sharp, tablet mode is great for PDFs. 4 stars because speakers could be slightly louder." }
    ]
  },
  {
    id: 6,
    brand: "Acer",
    model: "Swift Go 14",
    title: "Acer Swift Go 14 (AMD Ryzen 5, 8GB RAM, 512GB SSD) - Pure Silver",
    price: 32999,
    originalPrice: 52999,
    rating: 4.1,
    reviewCount: 42,
    condition: "fair",
    conditionText: "Fair (7.8/10) - Budget Friendly",
    image: "assets/acer_swift.png",
    specs: {
      "Processor": "AMD Ryzen 5 7520U (4-Core, Up to 4.3GHz)",
      "Memory": "8GB LPDDR5 RAM",
      "Storage": "512GB NVMe SSD",
      "Display": "14\" Full HD IPS (1920 x 1080) Slim-Bezel",
      "Operating System": "Windows 11 Home",
      "Battery Life": "Up to 8 Hours (Battery Health at 85%)",
      "Cosmetic Details": "Several visible fine hairline scratches on top lid. Keycap letters 'E' and 'S' have slight print fading. Keyboard and display work 100%.",
      "Accessories Included": "Acer 65W Charger",
      "A2B Warranty": "1-Year Comprehensive Warranty"
    },
    reviews: [
      { author: "Rohan D.", date: "2026-06-01", rating: 4, title: "Great value student laptop", comment: "Has minor scratch marks on the lid as listed, but it runs extremely fast. Perfect for my college writing and web browsing." },
      { author: "Alice M.", date: "2026-05-14", rating: 3, title: "Good price but check condition", comment: "The laptop works perfectly, but cosmetic wear is visible on the shell. If you don't mind a few scratches, this is a total bargain." }
    ]
  }
];

class A2BApp {
  constructor() {
    this.laptops = [...LAPTOP_DATA];
    
    // State Management (rupee config limits)
    this.filters = {
      brands: [],
      conditions: [],
      rams: [],
      processors: [],
      maxPrice: 150000
    };
    this.currentSort = 'popular';
    
    this.cart = this.loadState('a2b_cart', []);
    this.wishlist = this.loadState('a2b_wishlist', []);
    this.compareList = []; // Array of laptop IDs
    this.currentLocationPincode = this.loadState('a2b_pincode', null);
    
    this.activeProduct = null;
    this.carouselIndex = 0;
    this.carouselInterval = null;
    
    // DOM Cache
    this.dom = {
      catalogView: document.getElementById('catalog-view'),
      detailView: document.getElementById('detail-view'),
      productGrid: document.getElementById('product-grid'),
      productCount: document.getElementById('product-count'),
      mobileProductCount: document.getElementById('mobile-product-count'),
      priceSlider: document.getElementById('price-range-slider'),
      priceSliderVal: document.getElementById('price-slider-value'),
      brandFilters: document.getElementById('brand-filters'),
      conditionFilters: document.getElementById('condition-filters'),
      ramFilters: document.getElementById('ram-filters'),
      processorFilters: document.getElementById('processor-filters'),
      sortTabs: document.getElementById('sort-tabs'),
      clearFilters: document.getElementById('clear-filters-btn'),
      
      // Detail DOM (Desktop)
      breadcrumbBrand: document.getElementById('breadcrumb-brand'),
      breadcrumbModel: document.getElementById('breadcrumb-model'),
      detailMainImg: document.getElementById('detail-main-img'),
      detailThumbTrack: document.getElementById('detail-thumb-track'),
      detailBrand: document.getElementById('detail-brand'),
      detailTitle: document.getElementById('detail-title'),
      detailRatingBadge: document.getElementById('detail-rating-badge'),
      detailReviewCount: document.getElementById('detail-review-count'),
      detailConditionBadge: document.getElementById('detail-condition-badge'),
      
      // Detail DOM (Mobile-only)
      mobileDetailBrand: document.getElementById('mobile-detail-brand'),
      mobileDetailTitle: document.getElementById('mobile-detail-title'),
      mobileDetailRatingBadge: document.getElementById('mobile-detail-rating-badge'),
      mobileDetailReviewCount: document.getElementById('mobile-detail-review-count'),
      mobileDetailConditionBadge: document.getElementById('mobile-detail-condition-badge'),
      
      // Detail Price & Specs
      detailPrice: document.getElementById('detail-price'),
      detailOrigPrice: document.getElementById('detail-orig-price'),
      detailDiscount: document.getElementById('detail-discount'),
      detailSavings: document.getElementById('detail-savings'),
      detailSpecsTable: document.getElementById('detail-specs-table'),
      detailAddToCartBtn: document.getElementById('detail-add-to-cart-btn'),
      detailBuyNowBtn: document.getElementById('detail-buy-now-btn'),
      
      // Location Checker
      headerPincodeBtn: document.getElementById('header-pincode-btn'),
      pincodeDisplay: document.getElementById('pincode-display'),
      pincodeInput: document.getElementById('pincode-input'),
      pincodeCheckBtn: document.getElementById('pincode-check-btn'),
      pincodeFeedback: document.getElementById('pincode-feedback'),
      
      // Drawers
      backdrop: document.getElementById('drawer-backdrop'),
      cartBtn: document.getElementById('cart-btn'),
      cartCount: document.getElementById('cart-count'),
      cartDrawer: document.getElementById('cart-drawer'),
      cartDrawerClose: document.getElementById('cart-drawer-close'),
      cartDrawerBody: document.getElementById('cart-drawer-body'),
      cartSubtotal: document.getElementById('cart-subtotal'),
      cartSavings: document.getElementById('cart-savings'),
      cartTotal: document.getElementById('cart-total'),
      themeToggleBtn: document.getElementById('theme-toggle-btn'),
      wishlistBtn: document.getElementById('wishlist-btn'),
      wishlistCount: document.getElementById('wishlist-count'),
      
      // Comparison Panel
      compareBar: document.getElementById('compare-bar'),
      compareThumbs: document.getElementById('compare-thumbs-container'),
      compareItemsCount: document.getElementById('compare-items-count'),
      compareNowBtn: document.getElementById('compare-now-btn'),
      compareModal: document.getElementById('compare-modal'),
      compareModalClose: document.getElementById('compare-modal-close-btn'),
      comparisonTable: document.getElementById('comparison-table'),
      
      // Search
      searchInput: document.getElementById('search-input'),
      searchSuggestions: document.getElementById('search-suggestions'),
      logoLink: document.getElementById('logo-link'),

      // Mobile Redesign UI elements
      filterSidebar: document.getElementById('filter-sidebar'),
      filterSidebarClose: document.getElementById('filter-sidebar-close'),
      applyFiltersBtn: document.getElementById('apply-filters-btn'),
      mobileSortTrigger: document.getElementById('mobile-sort-trigger'),
      mobileFilterTrigger: document.getElementById('mobile-filter-trigger'),
      sortBottomSheet: document.getElementById('sort-bottom-sheet'),
      sortSheetClose: document.getElementById('sort-sheet-close'),

      // Mobile additional triggers (Rupee upgrade request)
      mobileHeaderFilterTrigger: document.getElementById('mobile-header-filter-trigger'),
      mobileGridFilterTrigger: document.getElementById('mobile-grid-filter-trigger')
    };

    this.init();
  }

  // Load state helper
  loadState(key, defaultValue) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  // Save state helper
  saveState(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage write error", e);
    }
  }

  init() {
    this.setupEventListeners();
    this.setupCarousel();
    this.buildFilterOptions();
    this.showCatalogView(); 
    this.updateCartBadge();
    this.updateWishlistBadge();
    this.updatePincodeDisplay();
    this.loadTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('selected-theme') || 'normal';
    this.applyTheme(savedTheme);
  }

  applyTheme(themeName) {
    document.body.classList.remove('theme-normal', 'theme-dark', 'theme-light', 'theme-bw');
    document.body.classList.add(`theme-${themeName}`);
    localStorage.setItem('selected-theme', themeName);
    
    const options = document.querySelectorAll('.theme-opt-btn');
    options.forEach(opt => {
      if (opt.dataset.theme === themeName) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    const icon = this.dom.themeToggleBtn.querySelector('i');
    if (icon) {
      if (themeName === 'light') {
        icon.className = 'fa-solid fa-sun';
      } else if (themeName === 'dark') {
        icon.className = 'fa-solid fa-moon';
      } else {
        icon.className = 'fa-solid fa-palette';
      }
    }
  }

  setupEventListeners() {
    // Header brand link
    this.dom.logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      this.showCatalogView();
    });

    // Pincode indicator click
    this.dom.headerPincodeBtn.addEventListener('click', () => {
      const pin = prompt("Enter a 6-digit delivery Zip Code/Pincode:", this.currentLocationPincode || "");
      if (pin !== null) {
        this.verifyAndSetPincode(pin);
      }
    });

    // Search bar listeners
    this.dom.searchInput.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
    document.addEventListener('click', (e) => {
      if (!this.dom.searchInput.contains(e.target) && !this.dom.searchSuggestions.contains(e.target)) {
        this.dom.searchSuggestions.style.display = 'none';
      }
    });

    // Price Slider (Rupee max logic)
    this.dom.priceSlider.addEventListener('input', (e) => {
      this.filters.maxPrice = parseInt(e.target.value);
      this.dom.priceSliderVal.textContent = `Max: ₹${this.filters.maxPrice.toLocaleString('en-IN')}`;
      this.renderProductGrid();
    });

    // Sort tabs (Desktop)
    this.dom.sortTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.sort-tab');
      if (!tab) return;
      
      this.dom.sortTabs.querySelectorAll('.sort-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      this.currentSort = tab.dataset.sort;
      this.syncSortUI(this.currentSort);
      this.renderProductGrid();
    });

    // Clear filters
    this.dom.clearFilters.addEventListener('click', () => {
      this.clearAllFilters();
    });

    // Cart Drawer Toggle
    this.dom.cartBtn.addEventListener('click', () => this.openCartDrawer());
    this.dom.cartDrawerClose.addEventListener('click', () => this.closeCartDrawer());
    
    // Backdrop click handles all overlays (Cart Drawer, Filter Drawer, Bottom Sheet)
    this.dom.backdrop.addEventListener('click', () => {
      this.closeCartDrawer();
      this.closeMobileFilterDrawer();
      this.closeMobileSortBottomSheet();
    });

    // Theme Dropdown Toggle
    this.dom.themeToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = document.getElementById('theme-dropdown');
      dropdown.classList.toggle('open');
    });

    // Theme Option Click Handler
    const themeOptions = document.querySelectorAll('.theme-opt-btn');
    themeOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        const theme = opt.dataset.theme;
        this.applyTheme(theme);
        document.getElementById('theme-dropdown').classList.remove('open');
      });
    });

    // Click Outside Theme Dropdown close
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('theme-dropdown');
      if (dropdown && !this.dom.themeToggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // Wishlist view trigger (filter by wishlist)
    this.dom.wishlistBtn.addEventListener('click', () => {
      if (this.wishlist.length === 0) {
        alert("Your Wishlist is empty! Click the heart on products to save them.");
        return;
      }
      this.showCatalogView();
      this.renderProductGrid(true);
    });

    // Detail page tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const contentId = btn.dataset.tab;
        document.getElementById(contentId).classList.add('active');
      });
    });

    // Pincode details checker
    this.dom.pincodeCheckBtn.addEventListener('click', () => {
      const value = this.dom.pincodeInput.value.trim();
      this.verifyAndSetPincode(value, true);
    });

    // Buy/Cart Detail button actions
    this.dom.detailAddToCartBtn.addEventListener('click', () => {
      if (this.activeProduct) {
        this.addToCart(this.activeProduct.id);
        this.openCartDrawer();
      }
    });

    this.dom.detailBuyNowBtn.addEventListener('click', () => {
      if (this.activeProduct) {
        this.addToCart(this.activeProduct.id);
        this.openCartDrawer();
        alert("Redirecting to secure Checkout payment gateway simulation...");
      }
    });

    // Compare bottom trigger
    this.dom.compareNowBtn.addEventListener('click', () => this.openCompareModal());
    this.dom.compareModalClose.addEventListener('click', () => this.closeCompareModal());

    // Review form rating star clicks
    const formStars = document.querySelectorAll('.form-rating-star');
    formStars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.rating);
        formStars.forEach((s, idx) => {
          if (idx < rating) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
        });
        this.dom.submitReviewBtn.dataset.rating = rating;
      });
    });

    // Submit review click
    document.getElementById('submit-review-btn').addEventListener('click', () => this.handleReviewSubmit());

    // MOBILEA2B SPECIFIC INTERACTIVE LISTENERS
    
    // Sort Bottom-sheet trigger open
    this.dom.mobileSortTrigger.addEventListener('click', () => this.openMobileSortBottomSheet());
    this.dom.sortSheetClose.addEventListener('click', () => this.closeMobileSortBottomSheet());

    // Mobile Radio options change
    document.getElementsByName('mobile-sort').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.syncSortUI(this.currentSort);
        this.renderProductGrid();
        setTimeout(() => this.closeMobileSortBottomSheet(), 200); 
      });
    });

    // Filter Drawer triggers
    this.dom.mobileFilterTrigger.addEventListener('click', () => this.openMobileFilterDrawer());
    this.dom.mobileHeaderFilterTrigger.addEventListener('click', () => this.openMobileFilterDrawer());
    this.dom.mobileGridFilterTrigger.addEventListener('click', () => this.openMobileFilterDrawer());
    
    this.dom.filterSidebarClose.addEventListener('click', () => this.closeMobileFilterDrawer());
    this.dom.applyFiltersBtn.addEventListener('click', () => this.closeMobileFilterDrawer());
  }

  /* Mobile Sort Sheet Controllers */
  openMobileSortBottomSheet() {
    this.dom.backdrop.style.display = 'block';
    setTimeout(() => {
      this.dom.backdrop.style.opacity = '1';
      this.dom.sortBottomSheet.classList.add('open');
    }, 10);
  }

  closeMobileSortBottomSheet() {
    this.dom.sortBottomSheet.classList.remove('open');
    this.dom.backdrop.style.opacity = '0';
    setTimeout(() => {
      this.dom.backdrop.style.display = 'none';
    }, 300);
  }

  /* Mobile Filter Drawer Controllers */
  openMobileFilterDrawer() {
    this.dom.backdrop.style.display = 'block';
    setTimeout(() => {
      this.dom.backdrop.style.opacity = '1';
      this.dom.filterSidebar.classList.add('open');
    }, 10);
  }

  closeMobileFilterDrawer() {
    this.dom.filterSidebar.classList.remove('open');
    this.dom.backdrop.style.opacity = '0';
    setTimeout(() => {
      this.dom.backdrop.style.display = 'none';
    }, 300);
  }

  // Sync sorting checkboxes on desktop and radio options on mobile
  syncSortUI(sortValue) {
    this.dom.sortTabs.querySelectorAll('.sort-tab').forEach(tab => {
      if (tab.dataset.sort === sortValue) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    const radios = document.getElementsByName('mobile-sort');
    radios.forEach(r => {
      r.checked = (r.value === sortValue);
    });
  }

  /* Single Page Router transitions */
  showCatalogView() {
    this.dom.detailView.classList.remove('active');
    this.dom.catalogView.classList.add('active');
    
    document.body.className = 'catalog-active-mobile';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeProduct = null;
    this.renderProductGrid();
    this.updateCompareBar(); 
  }

  showProductDetails(productId) {
    const product = this.laptops.find(l => l.id === productId);
    if (!product) return;
    this.activeProduct = product;
    
    document.body.className = 'details-active-mobile';

    // Set breadcrumbs & titles
    this.dom.breadcrumbBrand.textContent = product.brand;
    this.dom.breadcrumbModel.textContent = product.model;
    
    // Desktop View text nodes
    this.dom.detailBrand.textContent = product.brand;
    this.dom.detailTitle.textContent = product.title;
    this.dom.detailConditionBadge.className = `detail-condition-badge ${product.condition}`;
    this.dom.detailConditionBadge.textContent = product.conditionText;
    
    // Mobile View text nodes
    this.dom.mobileDetailBrand.textContent = product.brand;
    this.dom.mobileDetailTitle.textContent = product.title;
    this.dom.mobileDetailConditionBadge.className = `detail-condition-badge ${product.condition}`;
    this.dom.mobileDetailConditionBadge.textContent = product.conditionText;

    // Rating badges
    this.dom.detailRatingBadge.querySelector('span').textContent = product.rating.toFixed(1);
    this.dom.mobileDetailRatingBadge.querySelector('span').textContent = product.rating.toFixed(1);
    
    // Rating reviews counters
    const countStr = `${product.reviewCount} Ratings & ${product.reviews.length} Reviews`;
    const countStrMobile = `(${product.reviewCount})`;
    this.dom.detailReviewCount.textContent = countStr;
    this.dom.mobileDetailReviewCount.textContent = countStrMobile;

    // Prices (Indian formatting)
    this.dom.detailPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
    this.dom.detailOrigPrice.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    this.dom.detailDiscount.textContent = `${discount}% OFF`;
    this.dom.detailSavings.textContent = `You Save ₹${(product.originalPrice - product.price).toLocaleString('en-IN')} on original retail price!`;

    // Render detail images gallery
    this.dom.detailMainImg.src = product.image;
    this.dom.detailThumbTrack.innerHTML = '';
    
    const angles = ['Default View', 'Keyboard Deck', 'Side Ports', 'Lid Design'];
    angles.forEach((angle, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${product.image}" alt="${angle}">`;
      thumb.addEventListener('click', () => {
        this.dom.detailThumbTrack.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        this.dom.detailMainImg.style.transform = 'scale(0.9)';
        setTimeout(() => {
          this.dom.detailMainImg.style.transform = 'scale(1)';
        }, 150);
      });
      this.dom.detailThumbTrack.appendChild(thumb);
    });

    // Populate spec table
    this.dom.detailSpecsTable.innerHTML = '';
    
    const technicalGroup = {
      "General & Refurbished Details": ["Cosmetic Details", "A2B Warranty", "Accessories Included"],
      "Core Hardware Specs": ["Processor", "Memory", "Storage", "Display", "GPU / Graphics"],
      "System details": ["Operating System", "Battery Life"]
    };

    for (const [groupName, keys] of Object.entries(technicalGroup)) {
      const headerRow = document.createElement('tr');
      headerRow.className = 'specs-section-row';
      headerRow.innerHTML = `<td colspan="2">${groupName}</td>`;
      this.dom.detailSpecsTable.appendChild(headerRow);

      keys.forEach(key => {
        if (product.specs[key]) {
          const row = document.createElement('tr');
          row.className = 'specs-row';
          row.innerHTML = `
            <td class="specs-name">${key}</td>
            <td class="specs-value">${product.specs[key]}</td>
          `;
          this.dom.detailSpecsTable.appendChild(row);
        }
      });
    }

    // Populate delivery location input
    this.dom.pincodeFeedback.style.display = 'none';
    if (this.currentLocationPincode) {
      this.dom.pincodeInput.value = this.currentLocationPincode;
      this.verifyAndSetPincode(this.currentLocationPincode, false);
    } else {
      this.dom.pincodeInput.value = '';
    }

    this.renderReviewsTab(product);

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.tab === 'specs-tab') btn.classList.add('active');
    });
    document.querySelectorAll('.tab-content').forEach(c => {
      c.classList.remove('active');
      if (c.id === 'specs-tab') c.classList.add('active');
    });

    this.dom.catalogView.classList.remove('active');
    this.dom.detailView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateCompareBar(); 
  }

  // Reviews renderer
  renderReviewsTab(product) {
    document.getElementById('reviews-agg-rating').textContent = product.rating.toFixed(1);
    
    const starBox = document.getElementById('reviews-agg-stars');
    starBox.innerHTML = '';
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starBox.innerHTML += `<i class="fa-solid fa-star"></i>`;
      } else if (i === fullStars + 1 && halfStar) {
        starBox.innerHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        starBox.innerHTML += `<i class="fa-regular fa-star"></i>`;
      }
    }
    document.getElementById('reviews-agg-count').textContent = `${product.reviewCount} Ratings`;

    const distroBox = document.getElementById('reviews-distribution');
    distroBox.innerHTML = '';
    
    const distroMap = {
      5: Math.round(product.rating >= 4.5 ? 70 : 40),
      4: Math.round(product.rating >= 4.5 ? 20 : 35),
      3: Math.round(product.rating >= 4.5 ? 6 : 15),
      2: Math.round(product.rating >= 4.5 ? 3 : 7),
      1: Math.round(product.rating >= 4.5 ? 1 : 3)
    };

    for (let stars = 5; stars >= 1; stars--) {
      const percentage = distroMap[stars];
      const barRow = document.createElement('div');
      barRow.className = 'rating-bar-row';
      barRow.innerHTML = `
        <span class="rating-bar-label">${stars} ★</span>
        <div class="rating-bar-outer">
          <div class="rating-bar-inner" style="width: ${percentage}%"></div>
        </div>
        <span class="rating-bar-percentage">${percentage}%</span>
      `;
      distroBox.appendChild(barRow);
    }

    const listContainer = document.getElementById('reviews-list-container');
    listContainer.innerHTML = '';
    
    if (product.reviews.length === 0) {
      listContainer.innerHTML = `<div class="cart-empty-message" style="padding: 2rem 0;"><span style="font-size:0.9rem">No reviews yet. Be the first to review!</span></div>`;
    } else {
      product.reviews.forEach(rev => {
        const revCard = document.createElement('div');
        revCard.className = 'review-card';
        
        let starsMarkup = '';
        for (let i = 1; i <= 5; i++) {
          starsMarkup += `<i class="fa-solid fa-star" style="color: ${i <= rev.rating ? 'var(--color-warning)' : 'var(--text-dark)'}"></i>`;
        }

        revCard.innerHTML = `
          <div class="review-author-row">
            <span class="review-author"><i class="fa-regular fa-user"></i> ${rev.author}</span>
            <span class="review-date">${rev.date}</span>
          </div>
          <div class="review-rating-row">
            <div class="review-rating-stars">${starsMarkup}</div>
            <span class="review-title">${rev.title}</span>
          </div>
          <p class="review-comment">${rev.comment}</p>
        `;
        listContainer.appendChild(revCard);
      });
    }

    document.querySelectorAll('.form-rating-star').forEach(s => s.classList.remove('selected'));
    document.getElementById('review-form-name').value = '';
    document.getElementById('review-form-title').value = '';
    document.getElementById('review-form-comment').value = '';
    this.dom.submitReviewBtn.dataset.rating = "0";
  }

  // Handle Review Submission
  handleReviewSubmit() {
    if (!this.activeProduct) return;
    const rating = parseInt(document.getElementById('submit-review-btn').dataset.rating || 0);
    const author = document.getElementById('review-form-name').value.trim();
    const title = document.getElementById('review-form-title').value.trim();
    const comment = document.getElementById('review-form-comment').value.trim();

    if (rating === 0) {
      alert("Please select a star rating!");
      return;
    }
    if (!author || !title || !comment) {
      alert("Please fill in all review details!");
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const newReview = { author, date: today, rating, title, comment };

    this.activeProduct.reviews.unshift(newReview);
    
    const totalReviews = this.activeProduct.reviews.length;
    const sumRatings = this.activeProduct.reviews.reduce((acc, curr) => acc + curr.rating, 0);
    this.activeProduct.reviewCount += 1;
    this.activeProduct.rating = sumRatings / totalReviews;

    this.renderReviewsTab(this.activeProduct);
    alert("Thank you! Your mock review has been successfully submitted.");
  }

  /* Pincode & Delivery Validation */
  verifyAndSetPincode(pinCode, triggerAlert = false) {
    const validZip = /^\d{6}$/.test(pinCode) || /^\d{5}$/.test(pinCode);
    if (!validZip) {
      if (triggerAlert) alert("Please enter a valid 5-digit (US) or 6-digit (IN) numeric zip code!");
      this.dom.pincodeFeedback.className = "pincode-feedback error";
      this.dom.pincodeFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid pincode format.`;
      this.dom.pincodeFeedback.style.display = 'flex';
      return;
    }

    this.currentLocationPincode = pinCode;
    this.saveState('a2b_pincode', pinCode);
    this.updatePincodeDisplay();

    const lastDigit = parseInt(pinCode.slice(-1));
    const isEven = lastDigit % 2 === 0;

    let deliveryDate = new Date();
    if (isEven) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
    } else {
      deliveryDate.setDate(deliveryDate.getDate() + 3);
    }

    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const dateString = deliveryDate.toLocaleDateString('en-US', options);

    this.dom.pincodeFeedback.className = "pincode-feedback available";
    this.dom.pincodeFeedback.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      <span>Free Delivery available. Est. delivery by <strong>${dateString}</strong></span>
    `;
    this.dom.pincodeFeedback.style.display = 'flex';

    if (triggerAlert) {
      alert(`Location updated successfully to ${pinCode}.`);
    }
  }

  updatePincodeDisplay() {
    if (this.currentLocationPincode) {
      this.dom.pincodeDisplay.textContent = `Deliver to: ${this.currentLocationPincode}`;
    } else {
      this.dom.pincodeDisplay.textContent = "Select Location";
    }
  }

  /* Search Auto-complete suggestions */
  handleSearchInput(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      this.dom.searchSuggestions.style.display = 'none';
      return;
    }

    const matches = this.laptops.filter(l => 
      l.title.toLowerCase().includes(q) || 
      l.brand.toLowerCase().includes(q) ||
      l.specs.Processor.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      this.dom.searchSuggestions.innerHTML = `<div class="suggestion-item text-muted">No laptops found...</div>`;
      this.dom.searchSuggestions.style.display = 'block';
      return;
    }

    this.dom.searchSuggestions.innerHTML = '';
    matches.forEach(match => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.innerHTML = `
        <i class="fa-solid fa-laptop text-gradient"></i>
        <div>
          <div style="font-weight:600; font-size:0.85rem">${match.brand} ${match.model}</div>
          <div style="font-size:0.75rem; color: var(--text-muted)">${match.specs.Processor} | ₹${match.price.toLocaleString('en-IN')}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        this.showProductDetails(match.id);
        this.dom.searchInput.value = '';
        this.dom.searchSuggestions.style.display = 'none';
      });
      this.dom.searchSuggestions.appendChild(item);
    });

    this.dom.searchSuggestions.style.display = 'block';
  }

  /* Custom Sidebar filter builder */
  buildFilterOptions() {
    const brands = [...new Set(this.laptops.map(l => l.brand))];
    const conditions = [
      { key: "like-new", label: "Like New (9.5+)" },
      { key: "excellent", label: "Excellent (9.0+)" },
      { key: "good", label: "Good (8.0+)" },
      { key: "fair", label: "Fair (Under 8.0)" }
    ];
    const rams = ["8GB", "16GB", "32GB"];
    const processors = ["Apple", "Intel Core i7", "Intel Core i9", "AMD Ryzen 5", "AMD Ryzen 9"];

    // Render Brands
    this.dom.brandFilters.innerHTML = '';
    brands.forEach(b => {
      this.dom.brandFilters.appendChild(this.createCheckboxFilter('brand', b, b));
    });

    // Render Conditions
    this.dom.conditionFilters.innerHTML = '';
    conditions.forEach(c => {
      this.dom.conditionFilters.appendChild(this.createCheckboxFilter('condition', c.key, c.label));
    });

    // Render RAM
    this.dom.ramFilters.innerHTML = '';
    rams.forEach(r => {
      this.dom.ramFilters.appendChild(this.createCheckboxFilter('ram', r, r));
    });

    // Render Processors
    this.dom.processorFilters.innerHTML = '';
    processors.forEach(p => {
      this.dom.processorFilters.appendChild(this.createCheckboxFilter('processor', p, p));
    });
  }

  createCheckboxFilter(type, value, labelText) {
    const label = document.createElement('label');
    label.className = 'checkbox-label';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.dataset.type = type;
    input.value = value;
    
    input.addEventListener('change', () => {
      this.handleFilterChange(type, value, input.checked);
    });

    label.appendChild(input);
    label.innerHTML += `
      <span class="custom-checkbox"></span>
      <span>${labelText}</span>
    `;
    return label;
  }

  handleFilterChange(type, value, isChecked) {
    const filterArrayKey = `${type}s`;
    if (isChecked) {
      this.filters[filterArrayKey].push(value);
    } else {
      this.filters[filterArrayKey] = this.filters[filterArrayKey].filter(v => v !== value);
    }
    this.renderProductGrid();
  }

  clearAllFilters() {
    this.filters = {
      brands: [],
      conditions: [],
      rams: [],
      processors: [],
      maxPrice: 150000
    };
    this.dom.priceSlider.value = 150000;
    this.dom.priceSliderVal.textContent = "Max: ₹1,50,000";
    
    const inputs = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
    inputs.forEach(i => i.checked = false);

    this.renderProductGrid();
  }

  /* Render Catalog Grid */
  renderProductGrid(wishlistOnly = false) {
    this.dom.productGrid.innerHTML = '';
    
    let filtered = this.laptops.filter(laptop => {
      if (wishlistOnly && !this.wishlist.includes(laptop.id)) return false;

      if (laptop.price > this.filters.maxPrice) return false;

      if (this.filters.brands.length > 0 && !this.filters.brands.includes(laptop.brand)) return false;

      if (this.filters.conditions.length > 0 && !this.filters.conditions.includes(laptop.condition)) return false;

      if (this.filters.rams.length > 0) {
        const matchesRam = this.filters.rams.some(r => laptop.specs.Memory.includes(r));
        if (!matchesRam) return false;
      }

      if (this.filters.processors.length > 0) {
        const matchesProc = this.filters.processors.some(p => laptop.specs.Processor.includes(p));
        if (!matchesProc) return false;
      }

      return true;
    });

    if (this.currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    const countText = wishlistOnly 
      ? `Showing ${filtered.length} Wishlist Laptops`
      : `Showing ${filtered.length} of ${this.laptops.length} Certified Laptops`;

    this.dom.productCount.textContent = countText;
    this.dom.mobileProductCount.textContent = countText;

    if (filtered.length === 0) {
      this.dom.productGrid.innerHTML = `
        <div class="cart-empty-message" style="grid-column: 1 / -1; padding: 4rem 0;">
          <i class="fa-solid fa-filter-circle-xmark cart-empty-icon"></i>
          <span>No laptops match the selected filters. Let's try adjusting them!</span>
        </div>
      `;
      return;
    }

    filtered.forEach(laptop => {
      const card = document.createElement('article');
      card.className = 'product-card';
      
      const isFav = this.wishlist.includes(laptop.id);
      const isCompared = this.compareList.includes(laptop.id);
      const discount = Math.round(((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100);

      card.innerHTML = `
        <!-- Badges -->
        <div class="card-badges">
          <span class="badge badge-certified">Certified</span>
          <span class="badge badge-condition ${laptop.condition}">${laptop.condition.replace('-', ' ')}</span>
        </div>

        <!-- Wishlist -->
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleWishlist(${laptop.id}, this)">
          <i class="fa-solid fa-heart"></i>
        </button>

        <!-- Product Media -->
        <div class="card-media" onclick="app.showProductDetails(${laptop.id})">
          <img src="${laptop.image}" alt="${laptop.model}">
        </div>

        <!-- Body -->
        <div class="card-body">
          <h3 class="card-title" onclick="app.showProductDetails(${laptop.id})">${laptop.brand} ${laptop.model}</h3>
          
          <!-- Rating -->
          <div class="rating-container">
            <div class="rating-badge">
              <span>${laptop.rating.toFixed(1)}</span> <i class="fa-solid fa-star"></i>
            </div>
            <span class="rating-count">(${laptop.reviewCount})</span>
          </div>

          <!-- Specs snippet (Desktop-only) -->
          <div class="card-highlights">
            <div class="highlight-item"><i class="fa-solid fa-cpu highlight-icon"></i> <span>${laptop.specs.Processor.split(' (')[0]}</span></div>
            <div class="highlight-item"><i class="fa-solid fa-microchip highlight-icon"></i> <span>${laptop.specs.Memory}</span></div>
            <div class="highlight-item"><i class="fa-solid fa-hard-drive highlight-icon"></i> <span>${laptop.specs.Storage.split(' NVMe')[0]}</span></div>
          </div>

          <!-- Price & Footer actions (Rupees formatting) -->
          <div class="card-footer">
            <div class="price-box">
              <span class="a2b-price">₹${laptop.price.toLocaleString('en-IN')}</span>
              <div class="price-original-row">
                <span class="original-price">₹${laptop.originalPrice.toLocaleString('en-IN')}</span>
                <span class="discount-tag">${discount}% OFF</span>
              </div>
            </div>

            <!-- Compare check -->
            <label class="checkbox-label compare-checkbox-wrapper" onclick="event.stopPropagation();">
              <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="app.toggleCompare(${laptop.id}, this.checked)">
              <span class="custom-checkbox"></span>
              <span>Compare</span>
            </label>
          </div>
        </div>
      `;
      this.dom.productGrid.appendChild(card);
    });
  }

  /* Wishlist logic */
  toggleWishlist(productId, btnElement) {
    const idx = this.wishlist.indexOf(productId);
    if (idx === -1) {
      this.wishlist.push(productId);
      btnElement.classList.add('active');
    } else {
      this.wishlist.splice(idx, 1);
      btnElement.classList.remove('active');
    }
    this.saveState('a2b_wishlist', this.wishlist);
    this.updateWishlistBadge();
  }

  updateWishlistBadge() {
    if (this.wishlist.length > 0) {
      this.dom.wishlistCount.textContent = this.wishlist.length;
      this.dom.wishlistCount.style.display = 'flex';
    } else {
      this.dom.wishlistCount.style.display = 'none';
    }
  }

  /* Cart Logic Drawer */
  openCartDrawer() {
    this.dom.backdrop.style.display = 'block';
    setTimeout(() => {
      this.dom.backdrop.style.opacity = '1';
      this.dom.cartDrawer.classList.add('open');
    }, 10);
    this.renderCartItems();
  }

  closeCartDrawer() {
    this.dom.cartDrawer.classList.remove('open');
    this.dom.backdrop.style.opacity = '0';
    setTimeout(() => {
      this.dom.backdrop.style.display = 'none';
    }, 300);
  }

  addToCart(productId) {
    const existing = this.cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ productId, quantity: 1 });
    }
    this.saveState('a2b_cart', this.cart);
    this.updateCartBadge();
  }

  updateCartQuantity(productId, delta) {
    const item = this.cart.find(item => item.productId === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(c => c.productId !== productId);
    }
    this.saveState('a2b_cart', this.cart);
    this.updateCartBadge();
    this.renderCartItems();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.productId !== productId);
    this.saveState('a2b_cart', this.cart);
    this.updateCartBadge();
    this.renderCartItems();
  }

  updateCartBadge() {
    const totalQty = this.cart.reduce((acc, curr) => acc + curr.quantity, 0);
    if (totalQty > 0) {
      this.dom.cartCount.textContent = totalQty;
      this.dom.cartCount.style.display = 'flex';
    } else {
      this.dom.cartCount.style.display = 'none';
    }
  }

  renderCartItems() {
    this.dom.cartDrawerBody.innerHTML = '';
    
    if (this.cart.length === 0) {
      this.dom.cartDrawerBody.innerHTML = `
        <div class="cart-empty-message">
          <i class="fa-solid fa-cart-shopping cart-empty-icon"></i>
          <span>Your cart is empty! Let's find your dream pre-loved laptop.</span>
        </div>
      `;
      this.dom.cartSubtotal.textContent = "₹0";
      this.dom.cartSavings.textContent = "₹0";
      this.dom.cartTotal.textContent = "₹0";
      return;
    }

    let subTotal = 0;
    let savings = 0;
    
    const list = document.createElement('div');
    list.className = 'cart-items-list';

    this.cart.forEach(cartItem => {
      const p = this.laptops.find(l => l.id === cartItem.productId);
      if (!p) return;

      subTotal += p.originalPrice * cartItem.quantity;
      savings += (p.originalPrice - p.price) * cartItem.quantity;

      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <div class="cart-item-img">
          <img src="${p.image}" alt="${p.model}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${p.title}</div>
          <div class="cart-item-price-row">
            <span class="cart-item-price">₹${(p.price * cartItem.quantity).toLocaleString('en-IN')}</span>
            <div class="quantity-controller">
              <button class="quantity-btn" onclick="app.updateCartQuantity(${p.id}, -1)">-</button>
              <span class="quantity-num">${cartItem.quantity}</span>
              <button class="quantity-btn" onclick="app.updateCartQuantity(${p.id}, 1)">+</button>
            </div>
          </div>
          <span class="cart-item-remove" onclick="app.removeFromCart(${p.id})">Remove</span>
        </div>
      `;
      list.appendChild(itemRow);
    });

    this.dom.cartDrawerBody.appendChild(list);

    const finalAmount = subTotal - savings;
    this.dom.cartSubtotal.textContent = `₹${subTotal.toLocaleString('en-IN')}`;
    this.dom.cartSavings.textContent = `-₹${savings.toLocaleString('en-IN')}`;
    this.dom.cartTotal.textContent = `₹${finalAmount.toLocaleString('en-IN')}`;
  }

  /* Comparison Panel System */
  toggleCompare(productId, isChecked) {
    if (isChecked) {
      if (this.compareList.length >= 3) {
        alert("You can compare up to 3 laptops at a time!");
        this.renderProductGrid();
        return;
      }
      if (!this.compareList.includes(productId)) {
        this.compareList.push(productId);
      }
    } else {
      this.compareList = this.compareList.filter(id => id !== productId);
    }
    this.updateCompareBar();
  }

  updateCompareBar() {
    this.dom.compareThumbs.innerHTML = '';
    
    if (this.compareList.length === 0) {
      this.dom.compareBar.classList.remove('active');
      return;
    }

    this.compareList.forEach(id => {
      const p = this.laptops.find(l => l.id === id);
      if (!p) return;

      const thumb = document.createElement('div');
      thumb.className = 'compare-thumb';
      thumb.innerHTML = `
        <img src="${p.image}" alt="${p.model}">
        <span class="compare-thumb-remove" onclick="app.removeCompareItem(${p.id})">&times;</span>
      `;
      this.dom.compareThumbs.appendChild(thumb);
    });

    this.dom.compareItemsCount.textContent = `${this.compareList.length} item(s) selected`;
    this.dom.compareBar.classList.add('active');
  }

  removeCompareItem(productId) {
    this.compareList = this.compareList.filter(id => id !== productId);
    this.updateCompareBar();
    this.renderProductGrid();
  }

  openCompareModal() {
    if (this.compareList.length < 2) {
      alert("Please select at least 2 laptops to compare specs side-by-side!");
      return;
    }
    
    this.renderCompareTable();
    this.dom.compareModal.classList.add('active');
  }

  closeCompareModal() {
    this.dom.compareModal.classList.remove('active');
  }

  renderCompareTable() {
    this.dom.comparisonTable.innerHTML = '';

    const products = this.compareList.map(id => this.laptops.find(l => l.id === id));
    
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `<th class="compare-col-header">Laptop Specifications</th>`;
    products.forEach(p => {
      headerRow.innerHTML += `
        <th class="compare-product-col">
          <div class="compare-product-header-box">
            <div class="compare-product-img">
              <img src="${p.image}" alt="${p.model}">
            </div>
            <span class="compare-product-name">${p.brand} ${p.model}</span>
            <span class="a2b-price" style="font-size:1.1rem">₹${p.price.toLocaleString('en-IN')}</span>
            <button class="btn btn-primary" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;" onclick="app.closeCompareModal(); app.showProductDetails(${p.id})">View specs</button>
          </div>
        </th>
      `;
    });
    this.dom.comparisonTable.appendChild(headerRow);

    const compareKeys = [
      { section: "General Refurbishment Info", keys: ["Cosmetic Details", "A2B Warranty", "Accessories Included"] },
      { section: "Hardware Configurations", keys: ["Processor", "Memory", "Storage", "Display", "GPU / Graphics"] },
      { section: "Utility Specs", keys: ["Operating System", "Battery Life"] }
    ];

    compareKeys.forEach(grp => {
      const secRow = document.createElement('tr');
      secRow.innerHTML = `<td class="spec-section-header" colspan="${products.length + 1}">${grp.section}</td>`;
      this.dom.comparisonTable.appendChild(secRow);

      grp.keys.forEach(key => {
        const row = document.createElement('tr');
        row.innerHTML = `<td class="specs-name" style="font-weight:600">${key}</td>`;
        
        products.forEach(p => {
          const val = p.specs[key] || "Not Specified / N/A";
          row.innerHTML += `<td>${val}</td>`;
        });
        this.dom.comparisonTable.appendChild(row);
      });
    });
  }

  /* Carousel Hero Banner logic */
  setupCarousel() {
    const track = this.dom.carouselTrack;
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!track || slides.length === 0) return;

    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goToSlide(idx));
      dotsContainer.appendChild(dot);
    });

    const updateDots = (index) => {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((d, idx) => {
        if (idx === index) d.classList.add('active');
        else d.classList.remove('active');
      });
    };

    this.goToSlide = (index) => {
      this.carouselIndex = index;
      track.style.transform = `translateX(-${index * 100}%)`;
      updateDots(index);
    };

    const nextSlide = () => {
      const nextIdx = (this.carouselIndex + 1) % slides.length;
      this.goToSlide(nextIdx);
    };

    const prevSlide = () => {
      const prevIdx = (this.carouselIndex - 1 + slides.length) % slides.length;
      this.goToSlide(prevIdx);
    };

    this.carouselInterval = setInterval(nextSlide, 7000);

    document.getElementById('carousel-next-btn').addEventListener('click', () => {
      clearInterval(this.carouselInterval);
      nextSlide();
      this.carouselInterval = setInterval(nextSlide, 7000);
    });

    document.getElementById('carousel-prev-btn').addEventListener('click', () => {
      clearInterval(this.carouselInterval);
      prevSlide();
      this.carouselInterval = setInterval(nextSlide, 7000);
    });
  }

  // Filter shortcut for footer links
  filterByBrand(brandName) {
    this.clearAllFilters();
    this.filters.brands.push(brandName);
    
    const checkboxes = document.querySelectorAll('#brand-filters input[type="checkbox"]');
    checkboxes.forEach(cb => {
      if (cb.value === brandName) cb.checked = true;
    });

    this.showCatalogView();
  }
}

// Instantiate App
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new A2BApp();
  window.app = app;
});
