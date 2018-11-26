<script>
function() {
        var buttons = document.querySelectorAll("#buttonList button"), prevButton;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function() {
                if (prevButton)
                    prevButton.className = "";

                this.className = "header";
                prevButton = this;
            }
        }
    }
    </script>


