function uploadContent() {
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];
    
    if (file) {
      console.log("File uploaded:", file.name);
      
      // Here you could add functionality for sending the file to the backend for object detection
      
      // Simulate object detection result for demo purposes
      const detectionResults = document.getElementById("detection-results");
      detectionResults.innerHTML = `
        <p>Object 1: Handbag</p>
        <p>Object 2: Watch</p>
      `;
      
      // Simulate product recommendations for demo purposes
      const productList = document.getElementById("product-list");
      productList.innerHTML = `
        <p>Product 1: Handbag - $50</p>
        <p>Product 2: Watch - $200</p>
      `;
    }
  }
  
  function toggleAR() {
    const arView = document.getElementById("ar-view");
    if (arView.style.display === "none") {
      arView.style.display = "block";
    } else {
      arView.style.display = "none";
    }
  }
  