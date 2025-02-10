function toggleSection(sectionId) {
            let section = document.getElementById(sectionId);

            if (section.classList.contains("visible")) {
                section.classList.remove("visible");
                section.classList.add("hidden");
            } else {

                document.querySelectorAll("section").forEach(sec => {
                    sec.classList.remove("visible");
                    sec.classList.add("hidden");
                });


                section.classList.remove("hidden");
                section.classList.add("visible");
            }

            let scrollToTopBtn = document.getElementById("scrollToTopBtn");

            window.onscroll = function () {
              if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
              ) {
                scrollToTopBtn.style.display = "block";
              } else {
                scrollToTopBtn.style.display = "none";
              }
            };

            scrollToTopBtn.onclick = function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
            };
        }
