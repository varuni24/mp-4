"use client";
import { DogProps } from "@/types";
import DogCard from "./DogCard";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1200px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 16px;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

const DogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const ErrorMessage = styled.div`
  margin: 40px auto;
  padding: 20px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
`;

export default function DogList({ dogList } : { dogList: DogProps[] }) {
    if (!dogList || dogList.length === 0) {
        return (
            <Container>
                <ErrorMessage> No dog breeds found! The API is rate-limited. Please try again later... </ErrorMessage>
            </Container>
        );
    }

    return (
        <Container>
            <PageHeader>
                <PageTitle> Dog Breed Collection </PageTitle>
                <PageSubtitle> Showing {dogList.length} different dog breeds </PageSubtitle>
            </PageHeader>

            <DogGrid>
                {dogList.map((dog) => ( <DogCard key={dog.id} dog={dog} /> ))}
            </DogGrid>
        </Container>
    );
}
