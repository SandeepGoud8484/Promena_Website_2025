import React from "react";
import styles from './IndustryCardOne.module.css';
import Image from "next/image";
import { IndustryCardOneData } from "@/types";



const IndustryCardOne: React.FC<IndustryCardOneData> = ({ number, image, title, description, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={image} alt={title} width="100" height="100" className={styles.servImage} />
                <div className={styles.cardNumber}>{number}</div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                    <Image src={icon} alt={`${title} Icon`} width="100" height="100" className={styles.iconImage} />
                    <div className={styles.cardTitle}>
                        <h3 className={`text-[#101118] ${styles.title}`}>{title}</h3>
                    </div>
                </div>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default IndustryCardOne;
