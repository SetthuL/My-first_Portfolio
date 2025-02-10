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
        }