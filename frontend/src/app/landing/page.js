'use client';

import { useAuth } from '@/context/AuthContext';

import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';
import {
  AdvocateMask,
  TransactionalBlockchain,
  DoctorPatient,
  Handshake,
} from '@carbon/pictograms-react';

export default function LandingPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Grid className="landing-grid">
        <Column lg={8} md={4} sm={4} className="landing-grid__lc">
          <div className="landing-grid__content-wrapper">
            <img
              src="/images/logo.svg"
              alt="Medi Connect Logo with Medical Tech Symbol and Medical Symbol"
              className="logo"
            />
            <h1 className="header-text">Medi Connect</h1>

            <p className="description-text">
              HB Studio&apos;s <strong>Medi Connect</strong> is a web
              application designed to streamline appointment management and
              medical record sharing between patients and healthcare providers.
              Patients can easily book appointments, and healthcare providers
              can review patients&apos; medical records in advance, allowing for
              a more thorough and prepared consultation. Built on FHIR
              standards, Medi-Connect ensures data consistency and security.
            </p>
            {!isLoggedIn && (
              <>
                <Button
                  className="landing-button"
                  kind="primary"
                  size="large-productive"
                  onClick={() => router.push('/login')}
                  renderIcon={ArrowRight}>
                  Log In
                </Button>
                <Button
                  className="landing-button"
                  kind="tertiary"
                  size="large-productive"
                  onClick={() => router.push('/register')}
                  renderIcon={ArrowRight}>
                  Join Now!
                </Button>
              </>
            )}
          </div>
        </Column>

        <Column lg={8} md={4} sm={4} className="landing-grid__rc">
          <img
            src="/images/landing.png"
            alt="Landing Page Image With Medical Items"
            className="right-image"
          />
        </Column>
      </Grid>
      <Grid fullWidth className="info-section-row">
        <Column lg={16} md={8} sm={4}>
          <InfoSection heading="Why Choose Medi Connect?">
            <InfoCard
              heading="Medi-C is Efficient"
              body="Patients can update their medical information and avoid re-entering details repeatedly. Medi Connect saves both time and effort."
              icon={() => <AdvocateMask size={32} />}
            />
            <InfoCard
              heading="Medi-C is Secure"
              body="Following FHIR standards, Medi-Connect ensures that critical medical data is securely stored and accessible only to authorized healthcare providers."
              icon={() => <TransactionalBlockchain size={32} />}
            />
            <InfoCard
              heading="Medi-C is Collaborative"
              body="Medi Connect facilitates better collaboration between healthcare providers, allowing them to share information and work together for accurate and swift patient diagnoses."
              icon={() => <DoctorPatient size={32} />}
            />
            <InfoCard
              heading="Medi-C is Friendly"
              body="With an intuitive Outlook-style interface, both healthcare providers and patients can easily navigate the system and manage appointments efficiently."
              icon={() => <Handshake size={32} />}
            />
          </InfoSection>
        </Column>
      </Grid>
    </>
  );
}
