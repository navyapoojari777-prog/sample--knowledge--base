// Search functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize: Show dashboard section by default
    const homeSection = document.getElementById('home-section');
    const productsSection = document.getElementById('products-section');
    const servicesSection = document.getElementById('services-section');
    const resourcesSection = document.getElementById('resources-section');
    const careersSection = document.getElementById('careers-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const introductionSection = document.getElementById('introduction-section');
    const acidSection = document.getElementById('acid-properties-section');
    const dataIntegritySection = document.getElementById('data-integrity-section');
    const joinErrorsSection = document.getElementById('join-errors-section');
    const postgresArchSection = document.getElementById('postgres-architecture-section');

    // Show dashboard section (top nav active)
    if (homeSection) homeSection.style.display = 'none';

    // Hide all other sections
    if (productsSection) productsSection.style.display = 'none';
    if (servicesSection) servicesSection.style.display = 'none';
    if (resourcesSection) resourcesSection.style.display = 'none';
    if (careersSection) careersSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block';
    if (introductionSection) introductionSection.style.display = 'none';
    if (acidSection) acidSection.style.display = 'none';
    if (dataIntegritySection) dataIntegritySection.style.display = 'none';
    if (joinErrorsSection) joinErrorsSection.style.display = 'none';
    if (postgresArchSection) postgresArchSection.style.display = 'none';

    const searchInput = document.querySelector('.search-input');
    const errorCards = document.querySelectorAll('.error-card');

    if (searchInput && typeof window.handleLiveSearch !== 'function') {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            const sections = document.querySelectorAll('.content-section');

            // If search is cleared, reset view to active section
            if (searchTerm === '') {
                // Show all cards again
                errorCards.forEach(card => card.style.display = '');

                // Trigger click on active nav item to restore section visibility
                const activeNav = document.querySelector('.nav-item.active') || document.querySelector('.nav-link.active');
                if (activeNav) {
                    // We can't easily trigger the exact event handler logic without clicking, 
                    // but we can manually reset sections based on active nav.
                    // Simpler: just click it.
                    activeNav.click();
                } else {
                    // Fallback: show dashboard, hide others
                    sections.forEach(s => s.style.display = 'none');
                    const dashboard = document.getElementById('dashboard-section');
                    if (dashboard) dashboard.style.display = 'block';
                }
                return;
            }

            // Search Logic
            sections.forEach(section => {
                const header = section.querySelector('.content-header h1');
                const subtitle = section.querySelector('.content-header .subtitle');
                const sectionName = (header ? header.textContent : '').toLowerCase();
                const sectionSub = (subtitle ? subtitle.textContent : '').toLowerCase();

                // specific check for section match
                const isSectionMatch = sectionName.includes(searchTerm) || sectionSub.includes(searchTerm);

                const cards = section.querySelectorAll('.error-card');
                let hasVisibleCard = false;

                cards.forEach(card => {
                    const cardText = card.textContent.toLowerCase();
                    const isCardMatch = cardText.includes(searchTerm);

                    // Show card if:
                    // 1. The Section Title matches (show matches AND non-matches in this section -> show ALL)
                    // 2. The Card itself matches
                    if (isSectionMatch || isCardMatch) {
                        card.style.display = '';
                        hasVisibleCard = true;

                        // Ensure details are expanded/visible
                        const details = card.querySelector('.error-details');
                        if (details) {
                            details.style.display = 'block';
                        }
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Show Section if it matches OR contains matching cards
                if (isSectionMatch || hasVisibleCard) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }

    // Section switching functionality
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Hide top nav sections when sidebar nav is clicked
            const homeSection = document.getElementById('home-section');
            const productsSection = document.getElementById('products-section');
            const servicesSection = document.getElementById('services-section');
            const resourcesSection = document.getElementById('resources-section');
            const careersSection = document.getElementById('careers-section');

            if (homeSection) homeSection.style.display = 'none';
            if (productsSection) productsSection.style.display = 'none';
            if (servicesSection) servicesSection.style.display = 'none';
            if (resourcesSection) resourcesSection.style.display = 'none';
            if (careersSection) careersSection.style.display = 'none';

            // Show corresponding section based on data-target
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                    if (targetId === 'acid-properties-section' && typeof generateAcidIssues === 'function') {
                        setTimeout(generateAcidIssues, 50);
                    }
                    if (targetId === 'data-integrity-section' && typeof generateDataIntegrityIssues === 'function') {
                        setTimeout(generateDataIntegrityIssues, 50);
                    }
                    if (targetId === 'postgres-architecture-section' && typeof generateArchitectureIssues === 'function') {
                        setTimeout(generateArchitectureIssues, 50);
                    }
                    if (targetId === 'backup-recovery-section' && typeof generateBackupRecoveryIssues === 'function') {
                        setTimeout(generateBackupRecoveryIssues, 50);
                    }
                    if (targetId === 'connection-auth-section' && typeof generateConnectionAuthIssues === 'function') {
                        setTimeout(generateConnectionAuthIssues, 50);
                    }
                    if (targetId === 'performance-optimization-section' && typeof generatePerformanceIssues === 'function') {
                        setTimeout(generatePerformanceIssues, 50);
                    }
                    if (targetId === 'replication-ha-section' && typeof generateReplicationIssues === 'function') {
                        setTimeout(generateReplicationIssues, 50);
                    }
                    if (targetId === 'security-postgres-section' && typeof generateSecurityPostgresIssues === 'function') {
                        setTimeout(generateSecurityPostgresIssues, 50);
                    }
                    if (targetId === 'extensions-section' && typeof generateExtensionsIssues === 'function') {
                        setTimeout(generateExtensionsIssues, 50);
                    }
                    if (targetId === 'fts-section' && typeof generateFtsIssues === 'function') {
                        setTimeout(generateFtsIssues, 50);
                    }
                    if (targetId === 'glossary-section' && typeof generateGlossaryIssues === 'function') {
                        setTimeout(generateGlossaryIssues, 50);
                    }
                    if (targetId === 'locking-concurrency-section' && typeof generateLockingConcurrencyIssues === 'function') {
                        setTimeout(generateLockingConcurrencyIssues, 50);
                    }
                    if (targetId === 'mvcc-section' && typeof generateMvccIssues === 'function') {
                        setTimeout(generateMvccIssues, 50);
                    }
                    if (targetId === 'postgres-17-section' && typeof generatePostgres17Issues === 'function') {
                        setTimeout(generatePostgres17Issues, 50);
                    }
                    if (targetId === 'postgres-business-section' && typeof generatePostgresBusinessIssues === 'function') {
                        setTimeout(generatePostgresBusinessIssues, 50);
                    }
                    if (targetId === 'query-indexing-section' && typeof generateQueryIndexingIssues === 'function') {
                        setTimeout(generateQueryIndexingIssues, 50);
                    }
                    if (targetId === 'sql-indexes-section' && typeof generateSqlIndexesIssues === 'function') {
                        setTimeout(generateSqlIndexesIssues, 50);
                    }
                    if (targetId === 'sql-joins-section' && typeof generateSqlJoinsIssues === 'function') {
                        setTimeout(generateSqlJoinsIssues, 50);
                    }
                    if (targetId === 'system-catalogs-section' && typeof generateSystemCatalogIssues === 'function') {
                        setTimeout(generateSystemCatalogIssues, 50);
                    }
                    if (targetId === 'troubleshooting-debugging-section' && typeof generateTroubleshootingIssues === 'function') {
                        setTimeout(generateTroubleshootingIssues, 50);
                    }
                    if (targetId === 'upgrade-migration-section' && typeof generateUpgradeMigrationIssues === 'function') {
                        setTimeout(generateUpgradeMigrationIssues, 50);
                    }
                    if (targetId === 'version-features-section' && typeof generateVersionFeaturesIssues === 'function') {
                        setTimeout(generateVersionFeaturesIssues, 50);
                    }
                }
            }
        });
    });

    // Top navigation handling
    const topNavLinks = document.querySelectorAll('.main-nav .nav-link');
    topNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all top nav links
            topNavLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Hide all content sections
            const allSections = document.querySelectorAll('.content-section');
            allSections.forEach(section => {
                section.style.display = 'none';
            });

            // Hide sidebar sections (knowledge base)
            const sidebarSections = document.querySelectorAll('.content-section[id$="-section"]');
            sidebarSections.forEach(section => {
                if (!section.id.includes('home') &&
                    !section.id.includes('products') &&
                    !section.id.includes('services') &&
                    !section.id.includes('resources') &&
                    !section.id.includes('careers')) {
                    section.style.display = 'none';
                }
            });

            // Show corresponding section based on nav text
            const navText = this.textContent.trim();
            const homeSection = document.getElementById('home-section');
            const productsSection = document.getElementById('products-section');
            const servicesSection = document.getElementById('services-section');
            const resourcesSection = document.getElementById('resources-section');
            const careersSection = document.getElementById('careers-section');

            if (navText.includes('Dashboard')) {
                if (dashboardSection) dashboardSection.style.display = 'block';
            } else if (navText.includes('Home')) {
                if (homeSection) homeSection.style.display = 'block';
            } else if (navText.includes('Products')) {
                if (productsSection) productsSection.style.display = 'block';
            } else if (navText.includes('Services')) {
                if (servicesSection) servicesSection.style.display = 'block';
            } else if (navText.includes('Resources')) {
                if (resourcesSection) resourcesSection.style.display = 'block';
            } else if (navText.includes('Careers')) {
                if (careersSection) careersSection.style.display = 'block';
            } else {
                // Default: show dashboard section
                if (dashboardSection) dashboardSection.style.display = 'block';
            }
        });
    });

    // Expand/collapse error details (optional enhancement)
    const errorTitles = document.querySelectorAll('.error-title');
    errorTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function () {
            const details = this.closest('.error-card').querySelector('.error-details');
            if (details) {
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Filter by severity
    const severityBadges = document.querySelectorAll('.severity-badge');
    severityBadges.forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.addEventListener('click', function (e) {
            e.stopPropagation();
            const severity = this.classList.contains('high') ? 'high' : 'medium';

            errorCards.forEach(card => {
                const cardSeverity = card.getAttribute('data-severity');
                if (severity === 'all' || cardSeverity === severity) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    errorCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Modal functionality
    const contactBtn = document.querySelector('.header-actions .btn-secondary:first-of-type');
    const loginBtn = document.querySelector('.header-actions .btn-secondary:last-of-type');
    const contactModal = document.getElementById('contact-modal');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');

    // Open Contact Us modal
    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            contactModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Open Login modal
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function (e) {
            e.preventDefault();
            loginModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (contactModal) contactModal.style.display = 'none';
            if (loginModal) loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle form submissions
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            contactForm.reset();
        });
    }

    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Login functionality would be implemented here. This is a demo.');
            // In a real application, this would send credentials to a server
        });
    }

    // Handle social login buttons
    const socialBtns = document.querySelectorAll('.btn-social');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const provider = this.textContent.trim();
            alert(`${provider} login would be implemented here. This is a demo.`);
        });
    });

    // Handle forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Password reset functionality would be implemented here. This is a demo.');
        });
    }

    // Handle signup link
    const signupLink = document.querySelector('.signup-link');
    if (signupLink) {
        signupLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (loginModal) loginModal.style.display = 'none';
            alert('Sign up functionality would be implemented here. This is a demo.');
        });
    }


    // Dynamic ACID Issue Generation
    function generateAcidIssues() {
        const acidSection = document.getElementById('acid-properties-section');
        if (!acidSection) return;

        const container = acidSection.querySelector('.errors-container');
        if (!container) return;

        // Current count is 1 (Stats card only)
        // We want 1243 total data cards. 
        const totalTarget = 1243;
        const currentCards = container.querySelectorAll('.error-card').length - 1; // Subtract stats card
        const needed = totalTarget - currentCards;

        if (needed <= 0) return;

        // We need 12 criticals total
        let criticalsNeeded = 12;

        const topics = [
            { title: "Atomicity Violation", icon: "⚛️", sev: "critical", code: "Atomicity" },
            { title: "Dirty Read Detected", icon: "👀", sev: "medium", code: "Isolation" },
            { title: "Non-Repeatable Read", icon: "🔄", sev: "medium", code: "Isolation" },
            { title: "Phantom Read Error", icon: "👻", sev: "medium", code: "Isolation" },
            { title: "Serialization Failure", icon: "🔒", sev: "high", code: "Concurrency" },
            { title: "Constraint Violation", icon: "🚫", sev: "medium", code: "Integrity" },
            { title: "Foreign Key Error", icon: "🔗", sev: "medium", code: "Integrity" },
            { title: "WAL Write Failure", icon: "💾", sev: "critical", code: "Durability" },
            { title: "Checkpoint Latency", icon: "⏱️", sev: "medium", code: "Performance" },
            { title: "Deadlock Detected", icon: "💀", sev: "high", code: "Concurrency" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];

            // Force critical based on our counter, otherwise use topic default
            let isCritical = criticalsNeeded > 0;
            if (isCritical) criticalsNeeded--;

            // If we forced critical, use critical styling. If not, use topic styling (unless topic is critical)
            const severity = isCritical ? 'critical' : topic.sev;
            const icon = isCritical ? '🔥' : topic.icon; // Use fire for forced criticals, or topic icon
            const currentCode = isCritical ? 'CRIT' : topic.code;
            const codeSuffix = String(i + 1).padStart(3, '0');

            // Slightly vary the title for realism
            const finalTitle = isCritical ? `CRITICAL: ${topic.title}` : `${topic.title} (Simulated #${i + 1})`;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', severity);

            card.innerHTML = `
                <div class="error-icon ${severity}">${icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${finalTitle}</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${severity}">${severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
                        <span class="error-code">${currentCode}-${codeSuffix}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This is a simulated ${topic.title.toLowerCase()} entry to demonstrate transaction integrity handling and ACID properties.</p>
                        <h3>Recommendation</h3>
                        <pre><code>-- Standard mitigation
ROLLBACK;
BEGIN;
-- Retail transaction logic
COMMIT;</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Run generation
    setTimeout(generateAcidIssues, 100);

    // Dynamic Data Integrity Issue Generation
    function generateDataIntegrityIssues() {
        const dataIntegritySection = document.getElementById('data-integrity-section');
        if (!dataIntegritySection) return;

        const container = dataIntegritySection.querySelector('.errors-container');
        if (!container) return;

        // Keep exactly 1243 issue cards (excluding auto overview card)
        const totalTarget = 1243;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Unique Constraint Violation", icon: "⚠️", sev: "medium", code: "23505" },
            { title: "NOT NULL Constraint Violation", icon: "⛔", sev: "medium", code: "23502" },
            { title: "Foreign Key Constraint Violation", icon: "🔗", sev: "high", code: "23503" },
            { title: "Check Constraint Violation", icon: "✅", sev: "medium", code: "23514" },
            { title: "Invalid Input Syntax", icon: "🧾", sev: "medium", code: "22P02" },
            { title: "Domain Constraint Violation", icon: "🧩", sev: "medium", code: "23514" },
            { title: "Data Type Mismatch", icon: "🔀", sev: "high", code: "42804" },
            { title: "Serialization Anomaly", icon: "🔒", sev: "high", code: "40001" },
            { title: "Deferred Constraint Failure", icon: "⏱️", sev: "medium", code: "23P01" },
            { title: "Exclusion Constraint Violation", icon: "🚫", sev: "high", code: "23P01" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">Code: ${topic.code}</span>
                    </div>
                    <div class="error-details">
                        <h3>Explanation</h3>
                        <p>This is a simulated data integrity issue to complete the 1243 issue catalog for this category.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Validate and fix data before commit
BEGIN;
-- correction logic
COMMIT;</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Ensure Data Integrity section also reaches 1243 issues
    setTimeout(generateDataIntegrityIssues, 120);

    // Dynamic PostgreSQL Architecture Issue Generation
    function generateArchitectureIssues() {
        const architectureSection = document.getElementById('postgres-architecture-section');
        if (!architectureSection) return;

        const container = architectureSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 432;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Backend Process Saturation", icon: "🧠", sev: "high", code: "ARCH-PROC" },
            { title: "Shared Buffer Pressure", icon: "💾", sev: "medium", code: "ARCH-MEM" },
            { title: "Checkpoint I/O Spike", icon: "⏱️", sev: "medium", code: "ARCH-CKPT" },
            { title: "WAL Flush Bottleneck", icon: "🧾", sev: "high", code: "ARCH-WAL" },
            { title: "Autovacuum Worker Contention", icon: "🧹", sev: "medium", code: "ARCH-AV" },
            { title: "Lock Manager Queue Build-up", icon: "🔒", sev: "high", code: "ARCH-LOCK" },
            { title: "Stats Collector Delay", icon: "📊", sev: "medium", code: "ARCH-STAT" },
            { title: "Catalog Cache Miss Burst", icon: "🗂️", sev: "medium", code: "ARCH-CAT" },
            { title: "Replication Sender Backlog", icon: "🔄", sev: "high", code: "ARCH-REPL" },
            { title: "Executor Plan Drift", icon: "🧭", sev: "medium", code: "ARCH-PLAN" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(3, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Explanation</h3>
                        <p>This simulated architecture issue expands the section catalog to 432 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Review architecture signals
SELECT now();
-- Apply tuning safely in staging first</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Backup & Recovery Issue Generation
    function generateBackupRecoveryIssues() {
        const backupSection = document.getElementById('backup-recovery-section');
        if (!backupSection) return;

        const container = backupSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 321;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Base Backup Stream Interrupted", icon: "💾", sev: "high", code: "BKP-BASE" },
            { title: "Archive Command Timeout", icon: "🕒", sev: "high", code: "BKP-ARCH" },
            { title: "WAL Segment Missing", icon: "🧱", sev: "critical", code: "BKP-WAL" },
            { title: "Restore Point Not Found", icon: "📍", sev: "medium", code: "BKP-RP" },
            { title: "Recovery Target Conflict", icon: "🎯", sev: "medium", code: "BKP-TGT" },
            { title: "Replica Rewind Required", icon: "⏪", sev: "high", code: "BKP-RWD" },
            { title: "Backup Verification Failed", icon: "✅", sev: "medium", code: "BKP-VER" },
            { title: "Retention Window Breach", icon: "📦", sev: "medium", code: "BKP-RET" },
            { title: "Incremental Chain Broken", icon: "🔗", sev: "high", code: "BKP-INC" },
            { title: "PITR Replay Lag", icon: "⏳", sev: "medium", code: "BKP-PITR" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(3, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Explanation</h3>
                        <p>This simulated backup/recovery issue expands the section catalog to 321 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Validate backup chain
SELECT now();
-- Re-run verification and recovery drills</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Ensure these sections also reach their dashboard totals
    setTimeout(generateArchitectureIssues, 130);
    setTimeout(generateBackupRecoveryIssues, 140);

    // Dynamic Connection & Authentication Issue Generation
    function generateConnectionAuthIssues() {
        const connectionSection = document.getElementById('connection-auth-section');
        if (!connectionSection) return;

        const container = connectionSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 284;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Password Authentication Failed", icon: "🔐", sev: "high", code: "28P01" },
            { title: "No pg_hba.conf Entry", icon: "🚫", sev: "high", code: "28000" },
            { title: "Connection Slots Exhausted", icon: "📶", sev: "medium", code: "53300" },
            { title: "Connection Refused", icon: "🔌", sev: "critical", code: "08001" },
            { title: "SSL Required by Policy", icon: "🛡️", sev: "medium", code: "08006" },
            { title: "SCRAM Handshake Mismatch", icon: "🔑", sev: "high", code: "08P01" },
            { title: "Client Certificate Validation Failed", icon: "📜", sev: "high", code: "28000" },
            { title: "DNS Resolution Failed", icon: "🌐", sev: "medium", code: "08004" },
            { title: "Authentication Timeout", icon: "⏱️", sev: "medium", code: "57014" },
            { title: "Role Login Permission Denied", icon: "👤", sev: "high", code: "42501" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated connectivity/authentication issue expands the section catalog to 284 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Validate auth chain
SELECT current_user;
-- Check pg_hba.conf and TLS settings</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Performance Optimization Issue Generation
    function generatePerformanceIssues() {
        const performanceSection = document.getElementById('performance-optimization-section');
        if (!performanceSection) return;

        const container = performanceSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 1567;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Missing Index on Filter Column", icon: "🚀", sev: "medium", code: "PERF-INDEX" },
            { title: "Sequential Scan Hotspot", icon: "📈", sev: "medium", code: "PERF-SEQ" },
            { title: "Sort Spill to Disk", icon: "💽", sev: "high", code: "PERF-SORT" },
            { title: "Hash Join Memory Pressure", icon: "🧠", sev: "high", code: "PERF-HASH" },
            { title: "Inefficient Nested Loop", icon: "🔁", sev: "medium", code: "PERF-JOIN" },
            { title: "Autovacuum Lag Impact", icon: "🧹", sev: "high", code: "PERF-AV" },
            { title: "Checkpoint Write Burst", icon: "⏱️", sev: "medium", code: "PERF-CKPT" },
            { title: "Bloat-Induced Slowdown", icon: "📦", sev: "high", code: "PERF-BLOAT" },
            { title: "Contention on Hot Row", icon: "🔥", sev: "high", code: "PERF-LOCK" },
            { title: "Plan Regression After Stats Drift", icon: "🧭", sev: "medium", code: "PERF-PLAN" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(4, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated performance issue expands the section catalog to 1567 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Analyze and tune
EXPLAIN ANALYZE SELECT 1;
-- Add indexes and adjust memory settings</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Ensure these sections also reach their dashboard totals
    setTimeout(generateConnectionAuthIssues, 150);
    setTimeout(generatePerformanceIssues, 160);

    // Dynamic Replication & HA Issue Generation
    function generateReplicationIssues() {
        const replicationSection = document.getElementById('replication-ha-section');
        if (!replicationSection) return;

        const container = replicationSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 645;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Replication Lag Threshold Exceeded", icon: "🔄", sev: "high", code: "REPL-LAG" },
            { title: "Standby Replay Delay", icon: "⏳", sev: "medium", code: "REPL-REPLAY" },
            { title: "WAL Sender Connection Flap", icon: "📡", sev: "high", code: "REPL-SEND" },
            { title: "Slot Retention Growth", icon: "📦", sev: "medium", code: "REPL-SLOT" },
            { title: "Timeline Divergence Detected", icon: "🧭", sev: "high", code: "REPL-TL" },
            { title: "Failover Health Check Failed", icon: "🚨", sev: "critical", code: "REPL-FO" },
            { title: "Quorum Sync Not Met", icon: "🗳️", sev: "high", code: "REPL-QUORUM" },
            { title: "Archive Restore Gap", icon: "🧾", sev: "medium", code: "REPL-ARCH" },
            { title: "Replication Permission Denied", icon: "🔐", sev: "medium", code: "REPL-AUTH" },
            { title: "Standby Promotion Delay", icon: "⬆️", sev: "medium", code: "REPL-PROMOTE" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(4, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated replication/HA issue expands the section catalog to 645 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Check replication status
SELECT now();
-- Validate lag, slots, and failover policies</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Security in Postgres Issue Generation
    function generateSecurityPostgresIssues() {
        const securitySection = document.getElementById('security-postgres-section');
        if (!securitySection) return;

        const container = securitySection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 456;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Weak Password Policy Detected", icon: "🔓", sev: "high", code: "SEC-PASS" },
            { title: "Unencrypted Connection Attempt", icon: "🛡️", sev: "medium", code: "SEC-TLS" },
            { title: "Excessive Superuser Privileges", icon: "👑", sev: "high", code: "SEC-PRIV" },
            { title: "Role Inheritance Misconfiguration", icon: "👥", sev: "medium", code: "SEC-ROLE" },
            { title: "Row-Level Security Bypass Risk", icon: "🧱", sev: "high", code: "SEC-RLS" },
            { title: "Audit Logging Disabled", icon: "📝", sev: "critical", code: "SEC-AUDIT" },
            { title: "Extension Permission Escalation", icon: "🧩", sev: "high", code: "SEC-EXT" },
            { title: "Public Schema Write Access", icon: "🌐", sev: "medium", code: "SEC-PUBLIC" },
            { title: "Certificate Expiry Near", icon: "📜", sev: "medium", code: "SEC-CERT" },
            { title: "Default Credentials in Use", icon: "🔑", sev: "critical", code: "SEC-DEFAULT" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(4, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated security issue expands the section catalog to 456 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Audit security posture
SELECT current_user;
-- Enforce least privilege and TLS</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Extensions Issue Generation
    function generateExtensionsIssues() {
        const extensionsSection = document.getElementById('extensions-section');
        if (!extensionsSection) return;

        const container = extensionsSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 52;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "PostGIS Installation Conflict", icon: "🧩", sev: "medium", code: "EXT-POSTGIS" },
            { title: "Extension Version Mismatch", icon: "🔢", sev: "medium", code: "EXT-VERSION" },
            { title: "Missing Shared Library", icon: "📚", sev: "high", code: "EXT-LIB" },
            { title: "Permission Denied on CREATE EXTENSION", icon: "🚫", sev: "high", code: "EXT-PERM" },
            { title: "Upgrade Script Failure", icon: "⬆️", sev: "medium", code: "EXT-UPGRADE" },
            { title: "Extension Dependency Missing", icon: "🔗", sev: "medium", code: "EXT-DEP" },
            { title: "Control File Not Found", icon: "📄", sev: "high", code: "EXT-CTRL" },
            { title: "Incompatible Server Version", icon: "⚠️", sev: "high", code: "EXT-SERVER" },
            { title: "Schema Placement Conflict", icon: "🗂️", sev: "medium", code: "EXT-SCHEMA" },
            { title: "Trusted Extension Policy Block", icon: "🛡️", sev: "medium", code: "EXT-POLICY" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(3, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated extension issue expands the section catalog to 52 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Validate extension state
SELECT now();
-- Verify dependencies and server compatibility</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Ensure these sections also reach their dashboard totals
    setTimeout(generateReplicationIssues, 170);
    setTimeout(generateSecurityPostgresIssues, 180);
    setTimeout(generateExtensionsIssues, 190);

    // Dynamic Full Text Search Issue Generation
    function generateFtsIssues() {
        const ftsSection = document.getElementById('fts-section');
        if (!ftsSection) return;

        const container = ftsSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 174;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "FTS Index Missing", icon: "🔍", sev: "medium", code: "FTS-INDEX" },
            { title: "tsvector Not Updated", icon: "📝", sev: "medium", code: "FTS-TSVECTOR" },
            { title: "Ranking Query Slow", icon: "📉", sev: "high", code: "FTS-RANK" },
            { title: "Language Config Mismatch", icon: "🌐", sev: "medium", code: "FTS-LANG" },
            { title: "Phrase Search Miss", icon: "❓", sev: "medium", code: "FTS-PHRASE" },
            { title: "GIN Pending List Bloat", icon: "📦", sev: "high", code: "FTS-GIN" },
            { title: "Stopword Overfiltering", icon: "⛔", sev: "medium", code: "FTS-STOP" },
            { title: "Tokenizer Parse Error", icon: "🧩", sev: "high", code: "FTS-PARSE" },
            { title: "tsquery Syntax Invalid", icon: "⚠️", sev: "medium", code: "FTS-TSQUERY" },
            { title: "Dictionary Lookup Failure", icon: "📚", sev: "medium", code: "FTS-DICT" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;
            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(3, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated FTS issue expands the section catalog to 174 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Rebuild and analyze text index
SELECT now();</code></pre>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Glossary & Terminologies Issue Generation
    function generateGlossaryIssues() {
        const glossarySection = document.getElementById('glossary-section');
        if (!glossarySection) return;

        const container = glossarySection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 1117;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Ambiguous Term Definition", icon: "📖", sev: "medium", code: "GLOSS-TERM" },
            { title: "Deprecated Terminology Entry", icon: "🕰️", sev: "medium", code: "GLOSS-DEPR" },
            { title: "Concept Mapping Conflict", icon: "🔀", sev: "high", code: "GLOSS-MAP" },
            { title: "Outdated Version Note", icon: "📌", sev: "medium", code: "GLOSS-VERS" },
            { title: "Incorrect Acronym Expansion", icon: "🔤", sev: "medium", code: "GLOSS-ACRO" },
            { title: "Duplicate Glossary Entry", icon: "📑", sev: "medium", code: "GLOSS-DUP" },
            { title: "Cross-link Missing", icon: "🔗", sev: "medium", code: "GLOSS-LINK" },
            { title: "Terminology Scope Mismatch", icon: "🎯", sev: "high", code: "GLOSS-SCOPE" },
            { title: "Translation Variant Drift", icon: "🌍", sev: "medium", code: "GLOSS-I18N" },
            { title: "Taxonomy Classification Error", icon: "🗂️", sev: "high", code: "GLOSS-TAX" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;
            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(4, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated glossary issue expands the section catalog to 1117 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Review terminology entry
SELECT now();</code></pre>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Dynamic Locking & Concurrency Issue Generation
    function generateLockingConcurrencyIssues() {
        const lockingSection = document.getElementById('locking-concurrency-section');
        if (!lockingSection) return;

        const container = lockingSection.querySelector('.errors-container');
        if (!container) return;

        const totalTarget = 310;
        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;

        if (needed <= 0) return;

        const topics = [
            { title: "Deadlock Detected", icon: "🔒", sev: "high", code: "LOCK-DEAD" },
            { title: "Long Lock Wait", icon: "⏳", sev: "medium", code: "LOCK-WAIT" },
            { title: "Hot Row Contention", icon: "🔥", sev: "high", code: "LOCK-HOT" },
            { title: "Transaction Serialization Failure", icon: "⚠️", sev: "high", code: "LOCK-SERIAL" },
            { title: "Advisory Lock Collision", icon: "🧷", sev: "medium", code: "LOCK-ADV" },
            { title: "Idle in Transaction Session", icon: "🛑", sev: "medium", code: "LOCK-IDLE" },
            { title: "Blocked DDL Operation", icon: "🏗️", sev: "medium", code: "LOCK-DDL" },
            { title: "Access Exclusive Lock Spike", icon: "🚧", sev: "high", code: "LOCK-AE" },
            { title: "Update Chain Conflict", icon: "🔁", sev: "medium", code: "LOCK-CHAIN" },
            { title: "Vacuum Lock Interference", icon: "🧹", sev: "medium", code: "LOCK-VAC" }
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;
            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${topic.code}-${String(issueNumber).padStart(3, '0')}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>This simulated locking/concurrency issue expands the section catalog to 310 total issues.</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Inspect blocking sessions
SELECT now();</code></pre>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    // Ensure these sections also reach their dashboard totals
    setTimeout(generateFtsIssues, 200);
    setTimeout(generateGlossaryIssues, 210);
    setTimeout(generateLockingConcurrencyIssues, 220);

    function generateCategoryIssues(sectionId, totalTarget, topics, summaryText, codePadLength = 3) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const container = section.querySelector('.errors-container');
        if (!container) return;

        const issueCards = container.querySelectorAll('.error-card:not([data-kb-overview="auto"])');
        const needed = totalTarget - issueCards.length;
        if (needed <= 0) return;

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < needed; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const issueNumber = issueCards.length + i + 1;
            const issueCode = `${topic.code}-${String(issueNumber).padStart(codePadLength, '0')}`;

            const card = document.createElement('div');
            card.className = 'error-card';
            card.setAttribute('data-severity', topic.sev);
            card.innerHTML = `
                <div class="error-icon ${topic.sev}">${topic.icon}</div>
                <div class="error-content">
                    <h2 class="error-title">${topic.title} (Simulated #${issueNumber})</h2>
                    <div class="error-meta">
                        <span class="severity-badge ${topic.sev}">${topic.sev.charAt(0).toUpperCase() + topic.sev.slice(1)}</span>
                        <span class="error-code">${issueCode}</span>
                    </div>
                    <div class="error-details">
                        <h3>Overview</h3>
                        <p>${summaryText}</p>
                        <h3>Resolution</h3>
                        <pre><code>-- Review issue context
SELECT now();
-- Apply validated fix in staging first</code></pre>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            observer.observe(card);
        }

        container.appendChild(fragment);
    }

    function generateMvccIssues() {
        generateCategoryIssues(
            'mvcc-section',
            52,
            [
                { title: "Snapshot Visibility Conflict", icon: "📚", sev: "medium", code: "MVCC-SNAP" },
                { title: "Tuple Bloat from Stale Versions", icon: "📦", sev: "high", code: "MVCC-BLOAT" },
                { title: "Autovacuum Freeze Delay", icon: "🧹", sev: "high", code: "MVCC-FREEZE" },
                { title: "Transaction ID Wraparound Risk", icon: "🌀", sev: "critical", code: "MVCC-XID" },
                { title: "Old Snapshot Blocking Cleanup", icon: "⏳", sev: "medium", code: "MVCC-OLD" }
            ],
            "This simulated MVCC issue expands the section catalog to 52 total issues.",
            2
        );
    }

    function generatePostgres17Issues() {
        generateCategoryIssues(
            'postgres-17-section',
            321,
            [
                { title: "JSON_TABLE Migration Adjustment", icon: "🆕", sev: "medium", code: "PG17-JSON" },
                { title: "Incremental Backup Compatibility", icon: "💾", sev: "medium", code: "PG17-BKP" },
                { title: "Sub-transaction Cache Regression", icon: "⚡", sev: "high", code: "PG17-SUB" },
                { title: "Planner Change Validation", icon: "🧭", sev: "medium", code: "PG17-PLAN" },
                { title: "Upgrade Script Rework", icon: "⬆️", sev: "high", code: "PG17-UPG" }
            ],
            "This simulated Postgres 17 issue expands the section catalog to 321 total issues.",
            3
        );
    }

    function generatePostgresBusinessIssues() {
        generateCategoryIssues(
            'postgres-business-section',
            602,
            [
                { title: "SLA Breach Risk Analysis", icon: "💼", sev: "high", code: "BIZ-SLA" },
                { title: "Cost Efficiency Baseline Gap", icon: "💰", sev: "medium", code: "BIZ-COST" },
                { title: "Compliance Reporting Delay", icon: "📋", sev: "medium", code: "BIZ-COMP" },
                { title: "Case Study Data Inconsistency", icon: "📊", sev: "medium", code: "BIZ-CASE" },
                { title: "Executive KPI Drift", icon: "🎯", sev: "high", code: "BIZ-KPI" }
            ],
            "This simulated business-use issue expands the section catalog to 602 total issues.",
            3
        );
    }

    function generateQueryIndexingIssues() {
        generateCategoryIssues(
            'query-indexing-section',
            429,
            [
                { title: "Index Scan Not Chosen", icon: "🔎", sev: "medium", code: "QIP-SCAN" },
                { title: "Outdated Statistics Estimate", icon: "📉", sev: "medium", code: "QIP-STATS" },
                { title: "Composite Index Order Mismatch", icon: "🧩", sev: "high", code: "QIP-ORDER" },
                { title: "Parameter Sniffing Plan Drift", icon: "🧭", sev: "high", code: "QIP-PLAN" },
                { title: "Inefficient Filter Pushdown", icon: "⚙️", sev: "medium", code: "QIP-FILTER" }
            ],
            "This simulated query/indexing issue expands the section catalog to 429 total issues.",
            3
        );
    }

    function generateSqlIndexesIssues() {
        generateCategoryIssues(
            'sql-indexes-section',
            572,
            [
                { title: "B-Tree Hotspot Contention", icon: "📑", sev: "high", code: "IDX-BTREE" },
                { title: "GIN Pending List Growth", icon: "📦", sev: "high", code: "IDX-GIN" },
                { title: "Index Bloat Beyond Threshold", icon: "📈", sev: "high", code: "IDX-BLOAT" },
                { title: "Ineffective Partial Predicate", icon: "🔍", sev: "medium", code: "IDX-PART" },
                { title: "Hash Index Suitability Warning", icon: "⚠️", sev: "medium", code: "IDX-HASH" }
            ],
            "This simulated SQL indexes issue expands the section catalog to 572 total issues.",
            3
        );
    }

    function generateSqlJoinsIssues() {
        generateCategoryIssues(
            'sql-joins-section',
            111,
            [
                { title: "Join Cardinality Explosion", icon: "🔗", sev: "high", code: "JOIN-CARD" },
                { title: "Nested Loop Fallback", icon: "🔁", sev: "medium", code: "JOIN-NL" },
                { title: "Join Condition Type Mismatch", icon: "⚠️", sev: "high", code: "JOIN-TYPE" },
                { title: "Outer Join Filter Loss", icon: "🧪", sev: "medium", code: "JOIN-OUTER" },
                { title: "Hash Table Spill During Join", icon: "💽", sev: "high", code: "JOIN-SPILL" }
            ],
            "This simulated SQL join issue expands the section catalog to 111 total issues.",
            3
        );
    }

    function generateSystemCatalogIssues() {
        generateCategoryIssues(
            'system-catalogs-section',
            712,
            [
                { title: "pg_class Visibility Delay", icon: "🗄️", sev: "medium", code: "CAT-CLASS" },
                { title: "pg_stat_activity Snapshot Gap", icon: "📊", sev: "medium", code: "CAT-STAT" },
                { title: "Catalog Lookup Lock Wait", icon: "🔒", sev: "high", code: "CAT-LOCK" },
                { title: "Invalid OID Reference", icon: "🚫", sev: "high", code: "CAT-OID" },
                { title: "Settings Cache Mismatch", icon: "🔧", sev: "medium", code: "CAT-SET" }
            ],
            "This simulated system catalog issue expands the section catalog to 712 total issues.",
            3
        );
    }

    function generateTroubleshootingIssues() {
        generateCategoryIssues(
            'troubleshooting-debugging-section',
            182,
            [
                { title: "Log Signature Not Classified", icon: "🐞", sev: "medium", code: "DBG-LOG" },
                { title: "Blocking PID Investigation", icon: "🚦", sev: "high", code: "DBG-BLOCK" },
                { title: "Execution Plan Drift Alert", icon: "🧐", sev: "medium", code: "DBG-PLAN" },
                { title: "Intermittent Timeout Trace", icon: "⏱️", sev: "high", code: "DBG-TIME" },
                { title: "Diagnostic Script Failure", icon: "🧪", sev: "medium", code: "DBG-SCRIPT" }
            ],
            "This simulated troubleshooting issue expands the section catalog to 182 total issues.",
            3
        );
    }

    function generateUpgradeMigrationIssues() {
        generateCategoryIssues(
            'upgrade-migration-section',
            112,
            [
                { title: "pg_upgrade Compatibility Block", icon: "⬆️", sev: "high", code: "UPG-CHECK" },
                { title: "Dump/Restore Version Drift", icon: "⚠️", sev: "high", code: "UPG-DUMP" },
                { title: "Extension Upgrade Path Missing", icon: "🧩", sev: "medium", code: "UPG-EXT" },
                { title: "Logical Replication Cutover Lag", icon: "🔄", sev: "medium", code: "UPG-CUT" },
                { title: "Rollback Plan Gap", icon: "↩️", sev: "high", code: "UPG-ROLL" }
            ],
            "This simulated upgrade/migration issue expands the section catalog to 112 total issues.",
            3
        );
    }

    function generateVersionFeaturesIssues() {
        generateCategoryIssues(
            'version-features-section',
            200,
            [
                { title: "Feature Deprecation Tracking Gap", icon: "📋", sev: "medium", code: "VER-DEPR" },
                { title: "Breaking Change Not Mapped", icon: "🧭", sev: "high", code: "VER-BREAK" },
                { title: "Release Note Diff Missing", icon: "📝", sev: "medium", code: "VER-DIFF" },
                { title: "Compatibility Matrix Incomplete", icon: "🧩", sev: "high", code: "VER-MATRIX" },
                { title: "Version Rollout Sequence Error", icon: "🚀", sev: "medium", code: "VER-ROLL" }
            ],
            "This simulated version-feature issue expands the section catalog to 200 total issues.",
            3
        );
    }

    setTimeout(generateMvccIssues, 240);
    setTimeout(generatePostgres17Issues, 250);
    setTimeout(generatePostgresBusinessIssues, 260);
    setTimeout(generateQueryIndexingIssues, 270);
    setTimeout(generateSqlIndexesIssues, 280);
    setTimeout(generateSqlJoinsIssues, 290);
    setTimeout(generateSystemCatalogIssues, 300);
    setTimeout(generateTroubleshootingIssues, 310);
    setTimeout(generateUpgradeMigrationIssues, 320);
    setTimeout(generateVersionFeaturesIssues, 330);

    // Ensure every category section has a Back to Dashboard button
    function ensureBackButtonsForCategories() {
        const excluded = new Set([
            'home-section',
            'products-section',
            'services-section',
            'resources-section',
            'careers-section',
            'dashboard-section',
            'category-description-section'
        ]);

        const dashboardNav = document.querySelector('.nav-item[data-target="dashboard-section"]');
        const categorySections = document.querySelectorAll('.content-section[id$="-section"]');

        categorySections.forEach(section => {
            if (excluded.has(section.id)) return;

            const header = section.querySelector('.content-header');
            if (!header) return;
            if (header.querySelector('.back-to-dashboard-btn')) return;

            const title = header.querySelector('h1');
            if (!title) return;

            const titleRow = document.createElement('div');
            titleRow.style.display = 'flex';
            titleRow.style.justifyContent = 'space-between';
            titleRow.style.alignItems = 'center';
            titleRow.style.gap = '1rem';

            header.insertBefore(titleRow, title);
            titleRow.appendChild(title);

            const backBtn = document.createElement('button');
            backBtn.className = 'back-to-dashboard-btn';
            backBtn.innerHTML = '<span class="back-icon">←</span> Back to Dashboard';
            backBtn.addEventListener('click', function () {
                if (dashboardNav) {
                    dashboardNav.click();
                } else {
                    const allSections = document.querySelectorAll('.content-section');
                    allSections.forEach(s => s.style.display = 'none');
                    const dashboardSection = document.getElementById('dashboard-section');
                    if (dashboardSection) dashboardSection.style.display = 'block';
                }
            });

            titleRow.appendChild(backBtn);
        });
    }

    setTimeout(ensureBackButtonsForCategories, 230);

    // Chart Click Handler
    const donutChart = document.querySelector('.donut-chart');
    if (donutChart) {
        donutChart.style.cursor = 'pointer';
        donutChart.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const x = e.clientX - cx;
            const y = e.clientY - cy;

            // Calculate angle in degrees (0 is 12 o'clock, clockwise)
            let angleRad = Math.atan2(y, x);
            let angleDeg = angleRad * (180 / Math.PI) + 90;
            if (angleDeg < 0) angleDeg += 360;

            // ACID properties is 90% to 100% (Pink segment)
            // 360 * 0.9 = 324 degrees
            if (angleDeg >= 324 || angleDeg <= 5) { // Allow small buffer near 0/360
                const acidNav = document.querySelector('.nav-item[data-target="acid-properties-section"]');
                if (acidNav) {
                    acidNav.click();
                }
            }
        });
    }

    // Dark mode toggle with persistence
    const darkToggle = document.getElementById('dark-mode-toggle');
    function applyDashboardRuntimeThemeLock(enabled) {
        const styleId = 'runtime-dashboard-theme-lock';
        let styleEl = document.getElementById(styleId);

        if (!enabled) {
            if (styleEl) styleEl.remove();
            return;
        }

        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }

        styleEl.textContent = `
body.dark-mode #dashboard-section.enterprise-saas,
body.dark-mode #dashboard-section.enterprise-saas .enterprise-toolbar,
body.dark-mode #dashboard-section.enterprise-saas .enterprise-ux-strip > *,
body.dark-mode #dashboard-section.enterprise-saas .enterprise-detail-panel,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-stats > .stat-card,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-grid > .dashboard-card,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-extended-grid > .dashboard-card,
body.dark-mode #dashboard-section.enterprise-saas .workspace-context-card,
body.dark-mode #dashboard-section.enterprise-saas .severity-list,
body.dark-mode #dashboard-section.enterprise-saas .server-primary,
body.dark-mode #dashboard-section.enterprise-saas .table-wrap,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-table,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-table thead,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-table tbody tr,
body.dark-mode #dashboard-section.enterprise-saas .alerts-list,
body.dark-mode #dashboard-section.enterprise-saas .alert-row,
body.dark-mode #dashboard-section.enterprise-saas .command-center-card,
body.dark-mode #dashboard-section.enterprise-saas .timeline-card,
body.dark-mode #dashboard-section.enterprise-saas .command-kpis,
body.dark-mode #dashboard-section.enterprise-saas .kpi-chip,
body.dark-mode #dashboard-section.enterprise-saas .timeline-list,
body.dark-mode #dashboard-section.enterprise-saas .timeline-item,
body.dark-mode #dashboard-section.enterprise-saas .chart-details,
body.dark-mode #dashboard-section.enterprise-saas .chart-stat-box,
body.dark-mode #dashboard-section.enterprise-saas .quick-access-list,
body.dark-mode #dashboard-section.enterprise-saas .quick-access-item {
    background: #181F2B !important;
    background-image: none !important;
    border-color: rgba(72, 98, 138, 0.45) !important;
    box-shadow: none !important;
}

/* Search bar style from reference */
body.dark-mode #dashboard-section.enterprise-saas .enterprise-search,
body.dark-mode #dashboard-section.enterprise-saas .enterprise-search input {
    background: #1a2540 !important;
    color: #d8e5ff !important;
    border-color: #5f7fb5 !important;
}

body.dark-mode #dashboard-section.enterprise-saas .enterprise-search input::placeholder {
    color: #9fb3d8 !important;
}

/* Severity card: light rows from reference */
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-list,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-row {
    background: linear-gradient(90deg, #181F2B 0%, #1B2535 100%) !important;
    border-color: rgba(72, 98, 138, 0.45) !important;
}

body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-name,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-value,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-value.critical,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-value.high,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-value.medium,
body.dark-mode #dashboard-section.enterprise-saas .severity-breakdown-card .severity-value.low {
    color: #ffffff !important;
}

/* Command buttons from reference */
body.dark-mode #dashboard-section.enterprise-saas .command-center-card .command-btn {
    background: linear-gradient(90deg, #181F2B 0%, #1B2535 100%) !important;
    border-color: rgba(72, 98, 138, 0.45) !important;
    color: #ffffff !important;
}

body.dark-mode #dashboard-section.enterprise-saas .command-center-card .command-btn.primary {
    background: linear-gradient(90deg, #181F2B 0%, #1B2535 100%) !important;
    border-color: rgba(72, 98, 138, 0.45) !important;
    color: #ffffff !important;
}

body.dark-mode #dashboard-section.enterprise-saas .chart-instruction-box,
body.dark-mode #dashboard-section.enterprise-saas .chart-center-text {
    background: linear-gradient(90deg, #181F2B 0%, #1B2535 100%) !important;
    border-color: rgba(72, 98, 138, 0.45) !important;
    color: #ffffff !important;
}

body.dark-mode #dashboard-section.enterprise-saas .donut-chart::before {
    background: linear-gradient(90deg, #181F2B 0%, #1B2535 100%) !important;
}

body.dark-mode #dashboard-section.enterprise-saas .chart-instruction-box *,
body.dark-mode #dashboard-section.enterprise-saas .chart-center-text * {
    color: #ffffff !important;
}

body.dark-mode #dashboard-section.enterprise-saas .command-center-card .kpi-chip,
body.dark-mode #dashboard-section.enterprise-saas .command-center-card .kpi-chip *,
body.dark-mode #dashboard-section.enterprise-saas .command-center-card .kpi-chip .kpi-label,
body.dark-mode #dashboard-section.enterprise-saas .command-center-card .kpi-chip .kpi-value {
    color: #ffffff !important;
}

body.dark-mode #dashboard-section.enterprise-saas .dashboard-card::before,
body.dark-mode #dashboard-section.enterprise-saas .dashboard-card::after,
body.dark-mode #dashboard-section.enterprise-saas .stat-card::before,
body.dark-mode #dashboard-section.enterprise-saas .stat-card::after,
body.dark-mode #dashboard-section.enterprise-saas .command-center-card::before,
body.dark-mode #dashboard-section.enterprise-saas .timeline-card::before {
    content: none !important;
    background: none !important;
}
`;
    }

    function applyDarkMode(enabled) {
        document.body.classList.toggle('dark-mode', enabled);
        applyDashboardRuntimeThemeLock(enabled);
        if (darkToggle) {
            darkToggle.textContent = enabled ? '☀️' : '🌙';
            darkToggle.title = enabled ? 'Switch to light mode' : 'Switch to dark mode';
            darkToggle.setAttribute('aria-label', enabled ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    if (darkToggle) {
        let shouldUseDarkMode = false;
        try {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode === 'true' || savedMode === 'false') {
                shouldUseDarkMode = savedMode === 'true';
            } else if (window.matchMedia) {
                shouldUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        } catch (e) {}

        applyDarkMode(shouldUseDarkMode);
        darkToggle.addEventListener('click', () => {
            const nextMode = !document.body.classList.contains('dark-mode');
            applyDarkMode(nextMode);
            try { localStorage.setItem('darkMode', String(nextMode)); } catch (e) {}
        });
    }

    // Dashboard quick access navigation
    function initQuickAccessNavigation() {
        const quickItems = document.querySelectorAll('#dashboard-section .quick-access-card .quick-access-item[data-target]');
        if (!quickItems.length) return;

        function openFromQuickAccess(item) {
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;

            const navLink = document.querySelector(`.nav-item[data-target="${targetId}"]`);
            if (navLink) {
                navLink.click();
            } else {
                return;
            }

            const query = (item.getAttribute('data-query') || '').toLowerCase().trim();
            if (!query) return;

            setTimeout(() => {
                const cards = Array.from(document.querySelectorAll(`#${targetId} .error-card`));
                const match = cards.find((card) => card.textContent.toLowerCase().includes(query));
                if (!match) return;

                match.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const details = match.querySelector('.error-details');
                if (details) details.style.display = 'block';
            }, 180);
        }

        quickItems.forEach((item) => {
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
            item.addEventListener('click', () => openFromQuickAccess(item));
            item.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openFromQuickAccess(item);
                }
            });
        });
    }

    initQuickAccessNavigation();

    function initEnterpriseDashboardUX() {
        const panel = document.getElementById('enterprise-detail-panel');
        if (!panel) return;

        const titleEl = document.getElementById('edp-title');
        const badgeEl = document.getElementById('edp-badge');
        const descEl = document.getElementById('edp-desc');
        const listEl = document.getElementById('edp-list');

        function updateDetail(title, badge, desc, items) {
            if (!titleEl || !badgeEl || !descEl || !listEl) return;
            titleEl.textContent = title;
            badgeEl.textContent = badge;
            descEl.textContent = desc;
            listEl.innerHTML = '';
            (items || []).forEach((entry) => {
                const li = document.createElement('li');
                li.textContent = entry;
                listEl.appendChild(li);
            });
        }

        const envButtons = document.querySelectorAll('#dashboard-section .env-btn');
        envButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                envButtons.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                const env = btn.textContent.trim();
                updateDetail(
                    `Environment: ${env}`,
                    'Context',
                    `Dashboard controls now focus ${env} workflows.`,
                    [
                        `${env} incidents are prioritized in triage commands.`,
                        'Alerts and runbooks align to this selected environment.',
                        'Create Incident will open with this environment context.'
                    ]
                );
            });
        });

        const viewButtons = document.querySelectorAll('#dashboard-section .view-btn');
        viewButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                viewButtons.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                const view = btn.textContent.trim();
                updateDetail(
                    `View Mode: ${view}`,
                    'View',
                    `${view} perspective is active.`,
                    [
                        'Executive: KPI and trend focus.',
                        'Operations: action queue and incident response focus.',
                        'Reliability: prevention and stability signals focus.'
                    ]
                );
            });
        });

        const actionButtons = document.querySelectorAll('#dashboard-section .action-btn');
        actionButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const label = btn.textContent.trim();
                if (label === 'Quick Triage') {
                    updateDetail(
                        'Quick Triage Started',
                        'Action',
                        'Incident candidates were grouped by severity and service.',
                        [
                            'Critical cluster count estimated from active alerts.',
                            'Recommended owner queue generated for first response.',
                            'Escalation path linked to command center actions.'
                        ]
                    );
                } else if (label === 'Export Snapshot') {
                    updateDetail(
                        'Snapshot Prepared',
                        'Export',
                        'A point-in-time dashboard summary is ready.',
                        [
                            'Includes KPI, chart, and latest alert sections.',
                            'Format profile: PDF summary + CSV attachments.',
                            'Timestamp uses current dashboard context.'
                        ]
                    );
                } else if (label === 'Create Incident') {
                    updateDetail(
                        'Incident Draft Opened',
                        'Incident',
                        'New incident draft initialized from current dashboard view.',
                        [
                            'Priority recommendation attached.',
                            'Environment and view context copied into draft.',
                            'Runbook suggestions included for faster mitigation.'
                        ]
                    );
                }
            });
        });
    }

    initEnterpriseDashboardUX();

    // AI assistant: always responds, prioritizing project content
    function initAssistant() {
        const toggle = document.getElementById('assistant-toggle');
        const win = document.getElementById('assistant-window');
        const closeBtn = document.getElementById('assistant-close');
        const minimizeBtn = document.getElementById('assistant-minimize');
        const settingsBtn = document.getElementById('assistant-settings');
        const sendBtn = document.getElementById('assistant-send');
        const input = document.getElementById('assistant-input');
        const messages = document.getElementById('assistant-messages');
        if (!win || !sendBtn || !input || !messages) return;
        let assistantCardSeq = 0;

        const stopWords = new Set([
            'the', 'a', 'an', 'is', 'are', 'to', 'for', 'in', 'on', 'of', 'and', 'or', 'with', 'how',
            'what', 'where', 'when', 'why', 'can', 'you', 'i', 'me', 'my', 'this', 'that', 'about', 'please',
            'tell', 'project', 'question', 'show', 'give', 'need'
        ]);

        function normalize(text) {
            return (text || '')
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        function tokenize(text) {
            return normalize(text)
                .split(' ')
                .filter((token) => token.length > 2 && !stopWords.has(token));
        }

        function safeText(el) {
            return (el && el.textContent ? el.textContent : '').replace(/\s+/g, ' ').trim();
        }

        function isDetailedQuery(text) {
            const q = normalize(text);
            return q.includes('all details') ||
                q.includes('full details') ||
                q.includes('complete details') ||
                q.includes('in detail') ||
                q.includes('detailed information') ||
                q.includes('everything');
        }

        function getDetailBlocks(detailsEl) {
            if (!detailsEl) return [];
            const headings = Array.from(detailsEl.querySelectorAll('h3'));
            if (!headings.length) {
                const onlyText = safeText(detailsEl);
                return onlyText ? [{ heading: 'Details', text: onlyText }] : [];
            }

            const blocks = [];
            headings.forEach((h3) => {
                const heading = safeText(h3) || 'Details';
                const parts = [];
                let node = h3.nextElementSibling;
                while (node && node.tagName !== 'H3') {
                    const line = safeText(node);
                    if (line) parts.push(line);
                    node = node.nextElementSibling;
                }
                const text = parts.join(' ');
                if (text) blocks.push({ heading, text });
            });
            return blocks;
        }

        function buildKnowledgeIndex() {
            const cards = Array.from(document.querySelectorAll('.content-section .error-card'));
            return cards.map((card) => {
                const section = card.closest('.content-section');
                const sectionTitle = safeText(section ? section.querySelector('.content-header h1, .content-header h2') : null)
                    || (section ? section.id : '');
                const sectionId = section ? section.id : '';
                const title = safeText(card.querySelector('.error-title'));
                const code = safeText(card.querySelector('.error-code'));
                const detailsEl = card.querySelector('.error-details');
                const details = safeText(detailsEl);
                const detailBlocks = getDetailBlocks(detailsEl);
                if (!card.dataset.assistantId) {
                    assistantCardSeq += 1;
                    card.dataset.assistantId = `assist-card-${assistantCardSeq}`;
                }
                const searchable = normalize([sectionTitle, title, code, details].join(' '));
                const isSimulated = /\(simulated/i.test(title) || /simulated/i.test(details);
                return {
                    sectionId,
                    sectionTitle,
                    title,
                    code,
                    details,
                    detailBlocks,
                    searchable,
                    isSimulated,
                    cardId: card.dataset.assistantId
                };
            }).filter((row) => row.title || row.details);
        }

        function hasSidebarNav(sectionId) {
            if (!sectionId) return false;
            return !!document.querySelector(`.nav-item[data-target="${sectionId}"]`);
        }

        function getIntentSectionId(query) {
            const q = normalize(query);
            if (!q) return '';
            if (q.includes('connection')) return 'connection-auth-section';
            if (q.includes('query')) return 'query-indexing-section';
            if (q.includes('performance')) return 'performance-optimization-section';
            return '';
        }

        function findBestMatches(query, limit) {
            const kbIndex = buildKnowledgeIndex();
            const tokens = tokenize(query);
            if (!tokens.length) return [];
            const normalizedQuery = normalize(query);
            const queryCompact = normalizedQuery.replace(/\s+/g, ' ').trim();

            const ranked = kbIndex
                .map((entry) => {
                    let score = 0;
                    const title = normalize(entry.title);
                    const code = normalize(entry.code);
                    const section = normalize(entry.sectionTitle);
                    if (title && queryCompact === title) score += 320;
                    if (title && normalizedQuery.includes(title)) score += 180;
                    if (title && title.includes(queryCompact) && queryCompact.length >= 5) score += 70;
                    if (code && queryCompact === code) score += 260;
                    if (code && normalizedQuery.includes(code)) score += 160;
                    tokens.forEach((token) => {
                        if (title.includes(token)) score += 14;
                        if (code.includes(token)) score += 16;
                        if (section.includes(token)) score += 4;
                        if (entry.searchable.includes(token)) score += 2;
                    });
                    // Prefer sections that are actually reachable from sidebar navigation.
                    if (entry.sectionId && !hasSidebarNav(entry.sectionId)) {
                        score -= 90;
                    }
                    if (entry.isSimulated && !normalizedQuery.includes('simulated')) score -= 20;
                    return { entry, score };
                })
                .filter((x) => x.score > 0)
                .sort((a, b) => b.score - a.score)
                .slice(0, limit || 3)
                .map((x) => x.entry);

            return ranked;
        }

        function navigateToMatch(match) {
            if (!match || !match.sectionId) return false;
            const sectionId = match.sectionId;
            const navLink = document.querySelector(`.nav-item[data-target="${sectionId}"]`);
            if (navLink) {
                navLink.click();
            } else {
                return false;
            }

            setTimeout(() => {
                let card = document.querySelector(`.error-card[data-assistant-id="${match.cardId}"]`);
                if (!card) {
                    const inSection = document.querySelectorAll(`#${sectionId} .error-card`);
                    card = Array.from(inSection).find((c) => {
                        const t = normalize(safeText(c.querySelector('.error-title')));
                        const code = normalize(safeText(c.querySelector('.error-code')));
                        return t === normalize(match.title) || (code && code === normalize(match.code));
                    });
                }
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const detailsEl = card.querySelector('.error-details');
                    if (detailsEl) detailsEl.style.display = 'block';
                }
            }, 120);

            return true;
        }

        function addMessage(sender, text) {
            const div = document.createElement('div');
            div.className = `assistant-message ${sender}`;
            div.textContent = text;
            div.style.whiteSpace = 'pre-wrap';
            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
        }

        function addOptions(options) {
            const row = document.createElement('div');
            row.className = 'assistant-options';
            options.forEach((label) => {
                const btn = document.createElement('button');
                btn.textContent = label;
                btn.addEventListener('click', () => {
                    handleQuestion(label);
                });
                row.appendChild(btn);
            });
            messages.appendChild(row);
            messages.scrollTop = messages.scrollHeight;
        }

        function buildFallbackAnswer(question) {
            const q = normalize(question);
            if (q.includes('performance') || q.includes('slow') || q.includes('index')) {
                return 'General guidance: check EXPLAIN ANALYZE, validate indexes on filter/join columns, review work_mem/shared_buffers, and inspect bloat before changing query plans.';
            }
            if (q.includes('connection') || q.includes('login') || q.includes('auth') || q.includes('password')) {
                return 'General guidance: verify host/port reachability, pg_hba.conf rules, user credentials, SSL mode, and remaining connection slots.';
            }
            if (q.includes('replication') || q.includes('wal') || q.includes('backup') || q.includes('recovery')) {
                return 'General guidance: verify WAL retention, replication slot health, standby lag, archive command status, and backup chain consistency.';
            }
            if (q.includes('lock') || q.includes('deadlock') || q.includes('concurrency')) {
                return 'General guidance: inspect blocking sessions (pg_stat_activity), lock graph, transaction scope, and ensure consistent statement order in concurrent transactions.';
            }
            return 'I could not find an exact match in project data, but I can still help. Ask with an error title/code, section name, or PostgreSQL topic and I will return the closest project answer.';
        }

        function buildDetailedAnswer(entry, query) {
            const detailed = isDetailedQuery(query);
            const tokens = tokenize(query);
            const scoredBlocks = (entry.detailBlocks || []).map((block) => {
                const text = normalize(`${block.heading} ${block.text}`);
                let score = 0;
                tokens.forEach((token) => {
                    if (text.includes(token)) score += 1;
                });
                return { block, score };
            }).sort((a, b) => b.score - a.score || a.block.text.length - b.block.text.length);

            const limit = detailed ? 6 : 3;
            const selectedBlocks = scoredBlocks.slice(0, limit).map((x) => x.block);

            const parts = [
                `Best match: ${entry.title}`,
                entry.code ? `Code: ${entry.code}` : '',
                entry.sectionTitle ? `Section: ${entry.sectionTitle}` : ''
            ].filter(Boolean);

            if (selectedBlocks.length) {
                selectedBlocks.forEach((block) => {
                    parts.push(`${block.heading}: ${block.text}`);
                });
            } else if (entry.details) {
                parts.push(`Details: ${detailed ? entry.details : entry.details.slice(0, 900)}`);
            }

            return parts.join('\n');
        }

        function buildAnswer(question) {
            const query = (question || '').trim();
            if (!query) return null;
            const intentSectionId = getIntentSectionId(query);

            const lower = normalize(query);
            if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower === 'help') {
                return {
                    text: 'Ask any question about this project. I will answer from the project content, and if no direct match exists I will still provide guidance.',
                    sectionId: ''
                };
            }

            if (lower.includes('dark mode')) {
                return {
                    text: 'Use the moon/sun button in the top header to toggle dark mode. Your theme preference is saved automatically.',
                    sectionId: ''
                };
            }

            const top = findBestMatches(query, 3);
            if (top.length) {
                const best = top.find((x) => x.sectionId && x.sectionId === intentSectionId && hasSidebarNav(x.sectionId))
                    || top.find((x) => x.sectionId && hasSidebarNav(x.sectionId))
                    || top[0];
                const base = buildDetailedAnswer(best, query);
                const related = top.slice(1).map((x) => x.title).filter(Boolean);
                const resolvedSectionId = (intentSectionId && hasSidebarNav(intentSectionId))
                    ? intentSectionId
                    : best.sectionId;
                return {
                    text: related.length ? `${base}\nRelated: ${related.join(', ')}` : base,
                    sectionId: resolvedSectionId,
                    cardId: best.cardId,
                    title: best.title,
                    code: best.code
                };
            }

            if (intentSectionId && hasSidebarNav(intentSectionId)) {
                return {
                    text: buildFallbackAnswer(query),
                    sectionId: intentSectionId
                };
            }

            return {
                text: buildFallbackAnswer(query),
                sectionId: ''
            };
        }

        function handleQuestion(raw) {
            const query = (raw || '').trim();
            if (!query) return;
            addMessage('user', query);
            const response = buildAnswer(query);
            if (!response) return;
            addMessage('assistant', response.text);

            if (response.sectionId) {
                const row = document.createElement('div');
                row.className = 'assistant-options';
                const openBtn = document.createElement('button');
                openBtn.textContent = 'Open Section';
                openBtn.addEventListener('click', () => {
                    if (navigateToMatch(response)) {
                        addMessage('assistant', 'Opened the section.');
                    }
                });
                row.appendChild(openBtn);
                messages.appendChild(row);
                messages.scrollTop = messages.scrollHeight;
            }
        }

        function seedAssistantIntro() {
            if (!messages.children.length) {
                addMessage(
                    'assistant',
                    "Hello! 👋 I'm your PostgreSQL assistant."
                );
                addOptions(['Connection Issues', 'Query Problems', 'Performance Issues']);
            }
        }

        seedAssistantIntro();

        if (toggle) {
            toggle.addEventListener('click', () => {
                win.classList.remove('hidden');
                toggle.style.display = 'none';
                seedAssistantIntro();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                win.classList.add('hidden');
                if (toggle) toggle.style.display = 'flex';
            });
        }

        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => {
                win.classList.add('hidden');
                if (toggle) toggle.style.display = 'flex';
            });
        }

        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                addMessage('assistant', 'Settings are coming soon. Ask any PostgreSQL question and I will search this knowledge base for the best answer.');
            });
        }

        sendBtn.addEventListener('click', () => {
            handleQuestion(input.value);
            input.value = '';
            input.focus();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleQuestion(input.value);
                input.value = '';
            }
        });
    }

    initAssistant();

});
