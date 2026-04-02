<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Animation Website Using HTML CSS & JavaScript | Codehal</title>
    <link rel="stylesheet" href="style.css">
    <!-- Add Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

    <header>
        <!-- Point the logo link to the top section (e.g., #home) -->
        <a href="#home" class="logo">Lenghong</a>

        <nav>
            <!-- Update href attributes -->
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <model-viewer src="bee_flying.glb" id="bee-model" camera-orbit="90deg 90deg" autoplay></model-viewer>

    <!-- Add id="home" -->
    <section class="home" id="home">
        <h1>Bee Animation</h1>
    </section>

    <!-- Add id="about" -->
    <section class="about" id="about">
        <div class="about-content">
            <h2>About Bees</h2>
            <p>Bees are incredibly diverse flying insects known for their role in pollination and honey production. There are over 20,000 known species of bees worldwide...</p>
            <a href="https://www.britannica.com/animal/bee">View More</a> <!-- You might want this link to do something else -->
        </div>
    </section>

    <!-- Add id="gallery" -->
    <section class="gallery" id="gallery">
        <div class="gallery-content">
            <div class="outer">
                <div class="inner">
                    <!-- Add alt attributes for accessibility -->
                    <img src="bee1.png" alt="Bee close-up on flower">
                </div>
            </div>
            <div class="outer">
                <div class="inner"></div> <!-- Maybe add content or remove if empty -->
            </div>
            <div class="outer">
                <div class="inner">
                    <img src="bee3.png" alt="Bee approaching honeycomb">
                </div>
            </div>
        </div>
    </section>

    <!-- Add id="contact" -->
    <section class="contact" id="contact">
    <form class="contact-form" action="process_form.php" method="POST">
    <h2>Contact</h2>
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    
    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required>
    
    <label for="message">Your Message</label>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
    
    <button type="submit" name="submit">Send Message</button>
</form>
    </section>

    <script src="script.js"></script>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
        <!-- ... Your existing script tags ... -->
        <script src="script.js"></script>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>

    <!-- ========== FOOTER SECTION START ========== -->
    <footer>
        <div class="footer-content">
            <div class="footer-top">
                <div class="subscribe-section">
                    <label for="email-subscribe">Subscribe</label>
                    <div class="email-input-group">
                        <input type="email" id="email-subscribe" placeholder="Email">
                        <button type="submit" aria-label="Subscribe">
                            <i class="fas fa-chevron-right"></i> <!-- Font Awesome Icon -->
                        </button>
                    </div>
                </div>
                <div class="social-links">
                    <ul>
                        <li><a href="https://www.instagram.com/beestreetgallery/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://www.facebook.com/businessbeluga1000/videos/1105704457811216" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="https://www.hindustantimes.com/trending/elon-musk-just-rickrolled-his-twitter-followers-and-the-tweet-is-now-viral-101653559859853.html" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NcZn1JspgrY" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> Youtube</a></li>
                    </ul>
                </div>
            </div>

            <hr class="footer-divider">

            <div class="copyright">
                <p>© 2010-2025 Lenghong Ltd. All rights reserved.</p>
                 <!-- Update with your company name and years -->
            </div>
        </div>
    </footer>
    <!-- ========== FOOTER SECTION END ========== -->

</body>
</html>
</body>

</html>