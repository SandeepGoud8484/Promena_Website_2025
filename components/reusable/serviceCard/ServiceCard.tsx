"use client";
import React from "react";
import styles from "./ServiceCard.module.css"
import { motion } from "framer-motion";
import Image from "next/image";
import { useViewContext } from "@/hooks/ViewContext";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

interface ServiceCardInterface {
    card: ServiceCardProps;
    key: number;
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const ServiceCard: React.FC<ServiceCardInterface> = ({card}) => {
  const { title, subtitle, description, image } = card;
  const { isMobile } = useViewContext();
  const backgroundImage = image;

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={scaleIn}
    className={styles.serviceCard} style={
      isMobile
        ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
        : {}
    }>
      <div className={styles.serviceCardContent}>
        <h3 className={styles.serviceCardTitle}>{title}</h3>
        <p className={styles.serviceCardSubtitle}>{subtitle}</p>
        <div className={styles.serviceCardLine}></div>
        <p className={styles.serviceCardDescription}>{description}</p>
      </div>

      {!isMobile && <div
        className={styles.serviceCardImageWrapper}>
        <Image src={image} alt={title} className={styles.serviceCardImage} fill />
      </div>

      }

    </motion.div>
  );
};

export default ServiceCard;
