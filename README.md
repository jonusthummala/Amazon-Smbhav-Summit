BridgeCommerce

Transforming Social Media Content into AI-Driven Shoppable Experiences

BridgeCommerce is a revolutionary platform that automates the process of creating Amazon product listings from social media content. Using state-of-the-art AI, NLP, Computer Vision, and AR technologies, it enables influencers to monetize their content while offering customers an enhanced shopping experience.

Features

Content Upload: Users can upload images, videos, or captions for processing.
Object Detection: Automatically identifies objects in uploaded media using YOLOv5.
Caption Generation: Generates descriptive captions with BLIP for detected objects.
Product Recommendations: Suggests relevant products from Amazon based on detected objects.
Augmented Reality (AR): Allows users to visualize products in real-time through AR.
Analytics Dashboard: Displays key performance metrics, including influencer engagement and listing performance.
Demo

Watch the walkthrough of the platform here.

Deployment

Visit the live deployment of BridgeCommerce here.

Installation Instructions

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
Python 3.8+
Docker (for containerized deployment)
Kafka (for real-time data streaming)
Steps to Install Locally
Clone the Repository:
git clone https://github.com/your-username/bridgecommerce.git  
cd bridgecommerce  
Install Dependencies:
npm install  
Running the Prototype:
Start the Backend Server:
cd server  
npm run start  
Start the Frontend:
cd client  
npm run start  
Docker Deployment (Optional):
For containerized deployment, use Docker Compose:
docker-compose up --build  
Access the Platform:
Open your browser and visit http://localhost:3000.
Usage

1. Content Extraction
Upload images, videos, or captions.
Automatically generates Amazon-compatible listings with product titles, descriptions, and images.
2. Augmented Reality (AR) Visualization
Select a product and visualize it in real-time using AR on mobile or desktop browsers.
3. Analytics Dashboard
Review influencer engagement, product listing views, and sales performance metrics.
Open Source Components

Component	Version	License	Usage	Link
YOLOv5	Latest	GPL v3	Object detection	YOLOv5
BLIP	Latest	Apache 2.0	Caption generation	BLIP
BeautifulSoup	Latest	MIT	Web scraping	BeautifulSoup
TensorFlow Extended	Latest	Apache 2.0	ML pipeline orchestration	TFX
Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

License

This project is licensed under the MIT License.

For more details, refer to the LICENSE file in the repository.
