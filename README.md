#you can download complete code with dataset and trained model and website from
**Download Dataset and Models:
https://drive.google.com/file/d/1kHevITZbhPNZ-ZghN1tvK_1l0N0Lkd5g/view?usp=sharing**

# ByteCode

**ByteCode** is a fully functional web application developed for the Flipkart Grid 6.0 Robo Challenge, designed to optimize inventory management and enhance customer experience in retail through advanced AI technologies.

## Description

Hello everyone! I’m Nikhil Jangid, and I’m currently pursuing my BTech in Computer Science Engineering at VIT AP. I'm excited to present ByteCode, a solution developed to improve product detection and management in retail environments. 

Instead of relying solely on pre-existing datasets, I created custom datasets specifically for product detection to enhance the system's accuracy. The project features four AI models that work together to provide comprehensive functionality. I'm proud to say that I achieved 100% completion of the project as a solo contributor.

## Key Features

- **Fruit Quality Detection**: A model that assesses the freshness of fruits using a transfer learning approach with the InceptionV3 model. It focuses on visual cues such as color, texture, and shape, achieving an impressive 97% precision.
  
- **Expiry Date Prediction**: Integrated with OCR, this model extracts expiry dates from product packaging. It uses regular expressions to identify standard date formats and ensures accuracy by applying context-based rules.

- **Product Counting**: Utilizing EfficientNet and YOLOv5, this feature detects and counts products from images. The custom-trained dataset enables precise recognition of various product packaging and logos.

- **Product Detection**: EfficientNet also powers the product detection functionality, allowing for the accurate identification of items in a retail environment.

## Installation

### Prerequisites

- Python 3.x
- Required libraries listed in `requirements.txt`

### Clone the Repository

###bash
git clone <repository-url>
cd <repository-folder>

###Additional Setup
Create a virtual environment and install dependencies:
pip install -r requirements.txt
Usage
Run the application by executing the following command:
python main.py
Dataset and Models
Due to file size limitations on GitHub, some essential files are hosted on Google Drive. You can find the datasets, trained models, and other relevant files at the following link:

**Download Dataset and Models:
https://drive.google.com/file/d/1kHevITZbhPNZ-ZghN1tvK_1l0N0Lkd5g/view?usp=sharing**

File Contents
Training Files: Contains the custom datasets for training the models.
OCR Files: Includes scripts and resources used for optical character recognition.
Models: Pre-trained models used in the application.
Other Files: Additional scripts and resources required for the web application.
Features in Action
Here’s a quick video demonstrating how my web application works and showcases the features in action:

[Real-Time Expiry Detection Video](https://www.youtube.com/watch?v=Nq0AdUHKcBs)

Conclusion
Thank you for your attention! If you have any questions or would like to learn more about specific aspects of the project, please feel free to reach out.

Contributing
Contributions are welcome! Please submit issues or pull requests to enhance the functionality and features of ByteCode.

License
This project is licensed under the MIT License. See the LICENSE file for details.
