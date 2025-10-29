import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './InvitationGrid.module.css'; // We will create this new CSS file

/**
 * A responsive grid section to showcase invitation designs.
 *
 * @param {Object} props
 * @param {string} props.title - The main title for the section (e.g., "Our Invitation Styles").
 * @param {Object[]} props.invitations - An array of invitation objects to display.
 * @param {string} props.invitations[].imageUrl - Path to the invitation showcase image.
 * @param {string} props.invitations[].name - The name of the invitation style (e.g., "Sangeet Night").
 * @param {string} props.invitations[].description - A short description of the style.
 * @param {string} props.invitations[].linkUrl - The destination URL for the link.
 */
const InvitationGrid = ({ title, invitations }) => {
  if (!invitations || invitations.length === 0) {
    return null;
  }

  return (
    <section className={styles.invitationContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {invitations.map((invitation, index) => (
          <div key={index} className={styles.invitationCard}>
            {/* Image showcase area */}
            <div className={styles.imageWrapper}>
              <Image
                src={invitation.imageUrl}
                alt={invitation.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Content area */}
            <div className={styles.contentWrapper}>
              <h3 className={styles.invitationName}>{invitation.name}</h3>
              <p className={styles.invitationDescription}>{invitation.description}</p>
              <Link href={invitation.linkUrl} className={styles.invitationLink}>
                View Design <span>&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvitationGrid;