
import React from 'react';

function AboutPulmocare() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">About Pulmocare</h1>

      {/* Description */}
      <p className="text-lg mb-10">
        Pulmocare is an advanced AI-powered healthcare solution designed to predict and detect lung cancer with high accuracy.
        By analyzing medical images using cutting-edge machine learning algorithms, Pulmocare aids in early detection, helping doctors
        and patients make informed decisions.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img src="Lung-Cancer-Detection.jpg" alt="Lung Cancer Detection" className="w-2/3 rounded-lg shadow-md" />
      </div>

      {/* How It Works */}
      <h2 className="text-3xl font-semibold mb-6">How Pulmocare Works</h2>
      <p className="text-lg mb-10">
        Our AI model processes uploaded lung scans and predicts the presence of cancerous regions. Users simply upload an image,
        and Pulmocare provides an instant, reliable prediction, enabling timely intervention.
      </p>

      {/* Two Images Section */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <img src="/images/upload_scan.jpg" alt="Upload Scan" className="w-full rounded-lg shadow-md" />
        <img src="/images/ai_analysis.jpg" alt="AI Analysis" className="w-full rounded-lg shadow-md" />
      </div>

      {/* Why Pulmocare */}
      <h2 className="text-3xl font-semibold mb-6">Why Pulmocare?</h2>
      <ul className="list-disc list-inside text-lg text-left mb-10 mx-auto max-w-3xl">
        <li className="mb-3"><strong>Early Detection:</strong> Helps identify lung cancer at an early stage for better treatment outcomes.</li>
        <li className="mb-3"><strong>AI-Powered Accuracy:</strong> Uses state-of-the-art machine learning for precise analysis.</li>
        <li className="mb-3"><strong>User-Friendly Interface:</strong> Easy-to-use platform for quick predictions.</li>
        <li className="mb-3"><strong>Support for Healthcare Professionals:</strong> Assists doctors with reliable AI-driven insights.</li>
      </ul>

      {/* Call to Action */}
      <h2 className="text-3xl font-semibold mb-6">Join Us in the Fight Against Lung Cancer</h2>
      <p className="text-lg mb-10">
        Pulmocare is committed to enhancing medical diagnostics with AI. If you're a medical professional, researcher, or someone passionate
        about healthcare innovation, let's collaborate to improve early lung cancer detection.
      </p>

      {/* Contact Info */}
      <p className="text-lg font-semibold mb-10">Contact us to learn more!</p>
    </div>
  );
}

export default AboutPulmocare;

