"use client";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 20px;
  max-width: 1200px;
`;

const MainSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 16px;
`;

const MainSubtitle = styled.p`
  margin: 0 auto 40px;
  font-size: 20px;
  color: #666;
  max-width: 600px;
`;

const MainImage = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 0 auto 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
`;

const DogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeatureCard = styled.div`
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
`;

const FeatureTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 16px;
`;

const FeatureText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background-color: #1976d2;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #1565c0;
  }
`;

export default function Home() {
    return (
        <Container>
            <MainSection>
                <MainTitle> Dog Breed Explorer </MainTitle>
                <MainSubtitle> Find information about different dog breeds! </MainSubtitle>
                <MainImage>
                    <DogImage
                        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                        alt="happy dogos"
                    />
                </MainImage>
            </MainSection>

            <FeatureCard>
                <FeatureTitle>Dog Breed Collection</FeatureTitle>
                <FeatureText> Explore our collection of 20+ different dog breeds with detailed information, images and their characteristics </FeatureText>
                <ExploreButton href="/dogs"> Explore </ExploreButton>
            </FeatureCard>
        </Container>
    );
}
