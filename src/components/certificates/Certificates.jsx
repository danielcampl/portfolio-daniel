import React, { useState, useEffect } from "react";

import './Certificates.css'
import CertificateItems from "./CertificateItems";
import AlternativeNavbar from "../navbars/AlternativeNavbar";

const data = [
    "Fundamentos",
    "FrontEnd",
    "BackEnd",
    "C.Computação",
    "Ingles",
];

export default function Certificates() {
    const [certificates, setcertificates] = useState('');
    const [certificateImage, setCertificateImage] = useState('');
    const [linkToCertificate, setLinkToCertificate] = useState('');

    useEffect(() => {
        setCertificateImage(certificateImage);
        setLinkToCertificate(linkToCertificate);
    }, [setCertificateImage, setLinkToCertificate]);

    return (
        <div>
            <AlternativeNavbar />
            <section className="certificate-container">
                <div className="certificate-content">
                    <div className="certificate-img">
                        {certificates === "Fundamentos" ? (
                            <CertificateItems
                                certificateImage={"./img/certificates/fundamentos_certificate.png"}
                                linkToCertificate={'https://www.credential.net/e4a7d99d-5210-4a82-92c3-6c329dc018b1#gs.2vr78a'}
                            />
                        ) : certificates === "FrontEnd" ? (
                            <CertificateItems
                                certificateImage={"./img/certificates/frontend_certificate.png"}
                                linkToCertificate={'https://www.credential.net/d9e2c5dd-39ac-4a40-9255-3cd013802712'}
                            />
                        ) : certificates === "BackEnd" ? (
                            <CertificateItems
                                certificateImage={"./img/certificates/back-end-certificate.png"}
                                linkToCertificate={'https://www.credential.net/659f1059-8d42-4d0a-9e49-49e4d955efe3'}
                            />
                        ) : certificates === "C.Computação" ? (
                            <CertificateItems
                                certificateImage={"./img/certificates/ciencia_certificate.png"}
                                linkToCertificate={'https://www.credential.net/8b292e4b-39d3-498d-9c13-d795e42ffc95'}
                            />
                        ) : certificates === "Ingles" ? (
                            <CertificateItems
                                certificateImage={"./img/certificates/english-certificate.png"}
                                linkToCertificate={'https://numberone.com.br'}
                            />
                        ) : (
                            <div />
                        )}
                    </div>
                    <div className="certificate-names">
                        <ul>
                            {data.map((item) => (
                                <li
                                    key={item}
                                    text={item}
                                    onClick={() => setcertificates(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mobile-certificates-container">
                    <div className="certificate-img">
                        <CertificateItems
                            certificateImage={"./img/certificates/fundamentos_certificate.png"}
                            linkToCertificate={'https://www.credential.net/e4a7d99d-5210-4a82-92c3-6c329dc018b1#gs.2vr78a'}
                        />
                        <CertificateItems
                            certificateImage={"./img/certificates/frontend_certificate.png"}
                            linkToCertificate={'https://www.credential.net/d9e2c5dd-39ac-4a40-9255-3cd013802712'}
                        />
                        <CertificateItems
                            certificateImage={"./img/certificates/back-end-certificate.png"}
                            linkToCertificate={'https://www.credential.net/659f1059-8d42-4d0a-9e49-49e4d955efe3'}
                        />
                        <CertificateItems
                            certificateImage={"./img/certificates/ciencia_certificate.png"}
                            linkToCertificate={'https://www.credential.net/8b292e4b-39d3-498d-9c13-d795e42ffc95'}
                        />
                        <CertificateItems
                            certificateImage={"./img/certificates/english-certificate.png"}
                            linkToCertificate={'https://numberone.com.br'}
                        />
                        <div />
                    </div>
                </div>
            </section>
        </div>
    );
}
