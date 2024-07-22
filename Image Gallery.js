// HTML
<!DOCTYPE html>
<html>
<head>
	<title>Image Gallery</title>
</head>
<body>
	<h1>Image Gallery</h1>
	<div id="gallery"></div>

	<script src="gallery.js"></script>
</body>
</html>

// JavaScript (gallery.js)
const images = [
	{ src: "image1.jpg", alt: "Image 1" },
	{ src: "image2.jpg", alt: "Image 2" },
	{ src: "image3.jpg", alt: "Image 3" }
];

const gallery = document.getElementById("gallery");

images.forEach((image) => {
	const img = document.createElement("img");
	img.src = image.src;
	img.alt = image.alt;
	gallery.appendChild(img);
});

