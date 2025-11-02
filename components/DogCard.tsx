"use client";
import { DogProps } from "@/types";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f5f5f5;
  overflow: hidden;
`;

const DogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const DogName = styled.h3`
  font-size: 21px;
  color: #333;
  margin: 0 0 12px 0;
`;

const BreedGroup = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #e3f2fd;
  color: #1976d2;
  border-radius: 12px;
  font-size: 13px;
  margin-bottom: 12px;
`;

const InfoItem = styled.p`
  margin: 6px 0;
  color: #666;
  font-size: 14px;

  strong {
    color: #333;
  }
`;

export default function DogCard({ dog }: { dog: DogProps }) {
    // majority of the images end with jpg and some with other formats, so added this so to handle those few other formats where alt text will be displayed instead
    const imageURL = dog.reference_image_id ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg` : "";
    return (
        <Card>
            <CardImage>
              <DogImage src={imageURL} alt={dog.name} />
            </CardImage>

            <CardContent>
                <DogName>{dog.name}</DogName>
                {dog.breed_group && (<BreedGroup>{dog.breed_group}</BreedGroup>)}
                <InfoItem><strong> Life Span: </strong> {dog.life_span} </InfoItem>
                <InfoItem><strong> Height: </strong> {dog.height.imperial} </InfoItem>
                <InfoItem><strong> Weight: </strong> {dog.weight.imperial}lbs </InfoItem>
                {dog.origin && (<InfoItem><strong> Origin: </strong> {dog.origin} </InfoItem>)}
                {dog.bred_for && (<InfoItem><strong> Bred For: </strong> {dog.bred_for} </InfoItem>)}
                {dog.temperament && (<InfoItem><strong> Temperament: </strong> {dog.temperament} </InfoItem>)}
            </CardContent>
        </Card>
    );
}
