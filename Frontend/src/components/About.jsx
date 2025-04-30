import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function LungModel() {
  const { scene } = useGLTF('/models/realistic_human_lungs.glb');
  const lungRef = useRef();

  // useFrame(() => {
  //   lungRef.current.rotation.y += 0.001;
  // });

  return <primitive object={scene} ref={lungRef} scale={90} />;
}


function AboutPulmocare() {
  const CameraRef = useRef();


  return (
    <div className="p-8 max-w-10xl mx-auto text-center">
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
        <img src="LungCancer.jpeg" alt="Lung Cancer Detection" className="w-2/3 rounded-lg shadow-md" />
      </div>

      {/* How It Works */}
      <h2 className="text-3xl font-semibold mb-6">How Pulmocare Works</h2>
      <p className="text-lg mb-10">
        Our AI model processes uploaded lung scans and predicts the presence of cancerous regions. Users simply upload an image,
        and Pulmocare provides an instant, reliable prediction, enabling timely intervention.
      </p>

      {/* Two Images Section */}
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8 mb-10">
        <img
          src="AICancer.jpeg"
          alt="Upload Scan"
          className="w-full h-auto max-h-[50vh] rounded-lg shadow-md object-cover"
        />
        <img
          src="AICancer2.jpeg"
          alt="AI Analysis"
          className="w-full h-auto max-h-[50vh] rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Why Pulmocare */}
      <h2 className="text-3xl font-semibold mb-6">Why Pulmocare?</h2>
      <ul className="list-disc list-inside text-lg text-left mb-10 mx-auto max-w-3xl">
        <li className="mb-3"><strong>Early Detection:</strong> Helps identify lung cancer at an early stage for better treatment outcomes.</li>
        <li className="mb-3"><strong>AI-Powered Accuracy:</strong> Uses state-of-the-art machine learning for precise analysis.</li>
        <li className="mb-3"><strong>User-Friendly Interface:</strong> Easy-to-use platform for quick predictions.</li>
        <li className="mb-3"><strong>Support for Healthcare Professionals:</strong> Assists doctors with reliable AI-driven insights.</li>
      </ul>
      {/* 3D Lung Model */}
      <section id="3DModel">
        <h2 className="text-3xl font-semibold mb-6">3D LUNG MODEL</h2>
      </section>

      <div className="flex justify-center mb-10 h-[80vh] border-2 border-gray-300 rounded-lg shadow-md bg-gray-100">
        {/* 3D Model Section */}
        <div className="w-1/2 h-full flex items-center justify-center border-2 border-gray-300 rounded-lg shadow-md bg-gray-500">
          <Canvas camera={{ position: [0, 50, 50], ref: CameraRef }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <LungModel />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        {/* Info Section */}
        <div className="w-1/2 h-full p-8 bg-white overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Human Lungs</h1>
          <p className="text-lg leading-7">
            The lungs are a pair of spongy, air-filled organs located on either side of the chest (thorax)...
          </p>
          <ul className="mt-4 list-disc list-inside text-base">
            <li>Exchange of oxygen and carbon dioxide</li>
            <li>Filters airborne particles</li>
            <li>Plays a role in pH balance</li>
          </ul>
        </div>
      </div>



      {/* Call to Action */}
      <h2 className="text-3xl font-semibold mb-6">Join Us in the Fight Against Lung Cancer</h2>
      <p className="text-lg mb-10">
        Pulmocare is committed to enhancing medical diagnostics with AI. If you're a medical professional, researcher, or someone passionate
        about healthcare innovation, let's collaborate to improve early lung cancer detection.
      </p>

      {/* India  */}
      <h2 className="text-3xl font-semibold mb-6">Cancer fight in India</h2>
      <h1>Screening and Early Detection</h1>
      <p className="text-lg mb-10">
        Low-dose computed tomography (LDCT) of the chest
        is an established strategy for the screening of lung cancer. However, despite having a considerable burden of
        lung cancer, India does not have a formal screening
        program for lung cancer. Issues such as cost, logistic
        constraints, and concerns regarding high false-positive
        rates owing to the high prevalence of tuberculosis have
        prevented large-scale implementation of LDCT
        screening.8 In an ongoing study (NCT03909620) evaluating the role of LDCT for lung cancer screening at a
        tertiary care center in India (n ¼ 221), 33.5% of the
        subjects had a positive result after the first round of
        screening and 1.8% were diagnosed as having lung
        cancer (unpublished data), which is comparable with
        data from other countries in the region.9 Encouragingly,
        the presence of radiological sequelae of tuberculosis was
        not associated with a positive LDCT scan in this study.
        Positron emission tomography (PET)–computed tomography (CT) is often used to characterize lung nodules found during LDCT screening. However, PET-CT
        may have a high false-positive rate in developing
        Figure 2. Network of (A) PBCR and (B) HBCR of the NCRP coordinated and steered by the ICMR-NCDIR. Source: https://www.
        ncdirindia.org/All_Reports/Report_2020/default.aspx & Mathur et al.S2 Reproduced with permission. HBCR, hospital-based
        cancer registry; ICMR-NCDIR, Indian Council for Medical Research-National Centre for Disease Informatics and Research;
        NCRP, National Cancer Registry Programme; PBCR, population-based cancer registry.
        August 2021 Lung Cancer in India 1253
        countries such as India owing to infectious conditions
        limiting its use. In a study evaluating 144 lung solitary
        pulmonary nodules, nearly one-fourth of the solitary
        pulmonary nodules were of benign nature most
        commonly from tuberculosis and nonspecific inflammatory conditions.10 The maximum standardized uptake
        value cutoff of 2.5 typically used to distinguish benign
        and malignant lesions also has a limited utility in India
        because of its inability to distinguish granulomatous
        conditions such as tuberculosis and sarcoidosis from
        malignancy.10,11
        Diagnosis and Staging
        Flexible bronchoscopy and transthoracic sampling are
        the most often used techniques for the diagnosis of lung
        cancer. In general, lesions in the central one-third of the
        thorax are accessed bronchoscopically, whereas lesions
        in the peripheral one-third are accessed transthoracically. Bronchoscopy services have witnessed
        tremendous growth in India over the past decade,
        although there seems to be a concentration of services in
        major metropolitan cities.12 Advanced bronchoscopic
        Figure 3. Lung cancer is the leading site of cancer for male individuals at several of the population-based cancer registries of
        the NCRP coordinated and steered by the ICMR-NCDIR. Source: https://www.ncdirindia.org/All_Reports/Report_2020/
        default.aspx & Mathur et al.S2 Reproduced with permission. ICMR-NCDIR, Indian Council for Medical Research-National
        Centre for Disease Informatics and Research; NCRP, National Cancer Registry Programme.
        1254 Singh et al Journal of Thoracic Oncology Vol. 16 No. 8
        techniques such as endobronchial ultrasound (EBUS) are
        offered by several pulmonologists. Transthoracic sampling is generally performed under image guidance
        (ultrasonogram or CT) by interventional radiologists.
        However, at present, less than 1% of hospitals in India
        have a dedicated setup for interventional radiology.13
        Lesions in the middle one-third of the chest can be
        accessed by either of the modalities depending on
        patient-specific factors and the expertise available.
        Bronchoscopic techniques for the sampling of peripheral
        lesions include radial EBUS, virtual bronchoscopic navigation, electromagnetic navigation bronchoscopy, and
        ultrathin bronchoscopy. However, these bronchoscopic
        techniques are not widely available. More recently, PETguided biopsy has emerged as a promising technique for
        transthoracic sampling.14 Of note, the metabolic characterization provided by the PET-CT may allow targeting of
        viable tissue during sampling, thereby improving the
        diagnostic yield. Preliminary results revealed that for
        thoracic lesions having inconclusive results with previous invasive sampling, a diagnosis could be established in
        all the patients after PET-CT–guided biopsy.14 Ensuring
        adequate samples for histologic and molecular characterization is of paramount importance in advanced-stage
        disease but remains a challenge particularly at smaller
        centers because of lack of expertise. Liquid biopsy for the
        detection of driver mutations may be helpful in such
        situations where adequate tissue is unavailable for
        further analyses.
        Patients with lung cancer generally undergo
        noninvasive staging by imaging to assess the local and
        distant extent of disease. Noninvasive staging is especially important in patients with resectable disease.
        Whole-body PET-CT scan is the most accurate method
        for the noninvasive staging of lung cancer. However, in
        centers where PET-CT is not readily available, a
        radionuclide bone scan is combined with a contrastenhanced CT scan of the chest and upper abdomen
        (including liver and adrenals) for staging.15 Because
        PET-CT is not adequately sensitive for brain metastasis, magnetic resonance imaging of the brain is
        generally included in the staging evaluation. In patients
        who are not surgical candidates, most centers in India
        restrict the staging assessment to a contrast-enhanced
        CT scan of the chest and upper abdomen and do not
        routinely perform PET-CT or magnetic resonance imaging brain if the clinical evaluation does not suggest
        metastatic disease.
        Most patients with resectable disease typically undergo invasive mediastinal staging. Notably, any evidence of nodal involvement on imaging is generally
        confirmed by invasive mediastinal staging owing to the
        Figure 4. APC in age-AARs of lung cancer over the time period (2012–2016) at the population-based cancer registries of the
        NCRP coordinated and steered by the ICMR-NCDIR. Source: https://www.ncdirindia.org/All_Reports/Report_2020/default.
        aspx & Mathur et al.S2 Reproduced with permission. AAR, age-adjusted incidence rate; APC, Annual percent change;
        ICMR-NCDIR, Indian Council for Medical Research-National Centre for Disease Informatics and Research; NCRP, National
        Cancer Registry Programme.
        August 2021 Lung Cancer in India 1255
        possibility of false-positive results. Establishing histopathological evidence of nodal involvement is especially
        relevant in countries such as India where granulomatous
        diseases, for example, tuberculosis, are endemic. Invasive mediastinal staging is generally not needed in a
        small proportion of patients with peripheral stage IA
        disease without evidence of hilar or mediastinal
        involvement on PET-CT. The practice in India is variable.
        Some centers prefer to perform invasive mediastinal
        staging in all patients with resectable disease despite a
        negative PET-CT because the negative predictive value of
        a PET-CT is not 100%. Nonetheless, some centers prefer
        to follow a strategy that advocates liberal neoadjuvant
        chemotherapy (NACT) in subjects with any N2 disease
        on PET-CT, thereby restricting the use of invasive
        mediastinal staging to only those patients in whom PETCT reveals suspicion of N3 disease.15
        Endosonographic procedures (EBUS with or without
        endoscopic ultrasound) and mediastinoscopy are the
        techniques available for invasive mediastinal staging.
        Mediastinoscopy is generally considered as the accepted
        standard for invasive mediastinal staging. Mediastinoscopy offers an opportunity for complete lymphadenectomy (especially when video assisted) and provides a
        larger amount of tissue for further analyses (compared
        with endosonographic techniques). However, it is limited
        by the availability of trained thoracic surgeons and the
        potential for greater morbidity in comparison with the
        endosonographic procedures. Albeit, at experienced
        centers, the morbidity and mortality associated with
        mediastinoscopy are generally negligible. Evidence indicates that endoscopic procedures have a similar yield
        and a lower complication rate than mediastinoscopy.16,17
        However, because concerns regarding the higher falsenegative rate of endosonographic procedures compared
        with mediastinoscopy remain, some centers follow a
        negative endoscopic mediastinal staging with mediastinoscopy.15 Other centers prefer to proceed to surgery
        directly after a negative endoscopic mediastinal staging.
      </p>

      {/* Contact Info */}
      <p className="text-lg font-semibold mb-10">Contact us to learn more!</p>
    </div >
  );
}

export default AboutPulmocare;

