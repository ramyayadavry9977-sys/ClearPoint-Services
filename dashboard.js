

document.addEventListener("DOMContentLoaded", () => {



    const navLinks =
        document.querySelectorAll(".dashboard-nav-link[data-section]");

    const dashboardSections =
        document.querySelectorAll(".dashboard-section");

    const pageTitle =
        document.getElementById("dashboardPageTitle");

    const pageSubtitle =
        document.getElementById("dashboardPageSubtitle");

    const sidebar =
        document.getElementById("dashboardSidebar");

    const sidebarToggle =
        document.getElementById("sidebarToggle");

    const sidebarClose =
        document.getElementById("sidebarClose");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");

    const themeBtn =
        document.getElementById("themeBtn");

    const directionBtn =
        document.getElementById("directionBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const logoutModal =
        document.getElementById("logoutModal");

    const cancelLogout =
        document.getElementById("cancelLogout");

    const confirmLogout =
        document.getElementById("confirmLogout");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const profileBtn =
        document.getElementById("profileBtn");


   

    const sectionData = {

        dashboard: {

            title: "Dashboard",

            subtitle:
                "Manage your ClearPoint Services account"

        },

        appointments: {

            title: "My Appointments",

            subtitle:
                "Manage your upcoming and previous cleaning appointments"

        },

        schedule: {

            title: "Cleaning Schedule",

            subtitle:
                "View your regular cleaning schedule and upcoming visits"

        },

        crew: {

            title: "Crew Tracking",

            subtitle:
                "Follow your assigned cleaning crew and arrival status"

        },

        photos: {

            title: "Before & After",

            subtitle:
                "View photos from your completed cleaning services"

        },

        subscription: {

            title: "Subscription Plans",

            subtitle:
                "Manage your recurring window cleaning services"

        },

        payments: {

            title: "Payment History",

            subtitle:
                "Review your ClearPoint Services payment records"

        },

        notifications: {

            title: "Notifications",

            subtitle:
                "Stay updated with your appointments and services"

        },

        profile: {

            title: "My Profile",

            subtitle:
                "Manage your personal information and preferences"

        }

    };



    function showSection(sectionName) {

        if (!sectionData[sectionName]) {
            return;
        }




        dashboardSections.forEach(section => {

            section.classList.remove("active");

        });




        const selectedSection =
            document.getElementById(sectionName);

        if (selectedSection) {

            selectedSection.classList.add("active");

        }




        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.section === sectionName
            ) {

                link.classList.add("active");

            }

        });


        

        pageTitle.textContent =
            sectionData[sectionName].title;

        pageSubtitle.textContent =
            sectionData[sectionName].subtitle;




        closeSidebar();


    

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


  

        localStorage.setItem(
            "clearPointDashboardSection",
            sectionName
        );
    }


   

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            const section =
                link.dataset.section;

            showSection(section);

        });

    });


   

    document
        .querySelectorAll("[data-section]")
        .forEach(button => {

            if (
                !button.classList.contains(
                    "dashboard-nav-link"
                )
            ) {

                button.addEventListener(
                    "click",
                    () => {

                        const section =
                            button.dataset.section;

                        showSection(section);

                    }
                );

            }

        });


   

    function openSidebar() {

        sidebar.classList.add("open");

        sidebarOverlay.classList.add("active");

    }


    function closeSidebar() {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove("active");

    }


    sidebarToggle.addEventListener(
        "click",
        openSidebar
    );


    sidebarClose.addEventListener(
        "click",
        closeSidebar
    );


    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );




    const savedTheme =
        localStorage.getItem(
            "clearPointDashboardTheme"
        );


    function updateThemeIcon() {

        const icon =
            themeBtn.querySelector("i");

        if (
            document.documentElement
                .classList.contains("dark-mode")
        ) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

            themeBtn.title =
                "Switch to Light Mode";

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );

            themeBtn.title =
                "Switch to Dark Mode";
        }
    }


    if (savedTheme === "dark") {

        document.documentElement
            .classList.add("dark-mode");

    }


    updateThemeIcon();


    themeBtn.addEventListener(
        "click",
        () => {

            document.documentElement
                .classList.toggle("dark-mode");


            const isDark =
                document.documentElement
                    .classList.contains(
                        "dark-mode"
                    );


            localStorage.setItem(
                "clearPointDashboardTheme",
                isDark ? "dark" : "light"
            );


            updateThemeIcon();

        }
    );



    const savedDirection =
        localStorage.getItem(
            "clearPointDashboardDirection"
        );


    if (savedDirection === "rtl") {

        document.documentElement
            .setAttribute("dir", "rtl");

    } else {

        document.documentElement
            .setAttribute("dir", "ltr");

    }


    directionBtn.addEventListener(
        "click",
        () => {

            const currentDirection =
                document.documentElement
                    .getAttribute("dir");


            const newDirection =
                currentDirection === "rtl"
                    ? "ltr"
                    : "rtl";


            document.documentElement
                .setAttribute(
                    "dir",
                    newDirection
                );


            localStorage.setItem(
                "clearPointDashboardDirection",
                newDirection
            );

        }
    );



    notificationBtn.addEventListener(
        "click",
        () => {

            showSection("notifications");

        }
    );



    profileBtn.addEventListener(
        "click",
        () => {

            showSection("profile");

        }
    );



    logoutBtn.addEventListener(
        "click",
        () => {

            logoutModal.classList.add("active");

        }
    );


    cancelLogout.addEventListener(
        "click",
        () => {

            logoutModal.classList.remove(
                "active"
            );

        }
    );


    confirmLogout.addEventListener(
        "click",
        () => {

          

            window.location.href =
                "login.html";

        }
    );




    logoutModal.addEventListener(
        "click",
        event => {

            if (
                event.target === logoutModal
            ) {

                logoutModal.classList.remove(
                    "active"
                );

            }

        }
    );



    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSidebar();

                logoutModal.classList.remove(
                    "active"
                );

            }

        }
    );


 
    const savedSection =
        localStorage.getItem(
            "clearPointDashboardSection"
        );


    if (
        savedSection &&
        sectionData[savedSection]
    ) {

        showSection(savedSection);

    } else {

        showSection("dashboard");

    }

});