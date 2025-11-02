import { DogProps } from '@/types';

export default async function getBreeds(): Promise<DogProps[]> {
    const apiKey = process.env.DOG_API_KEY;
    if (!apiKey) {
        throw new Error('API key not configured!!');
    }

    const res = await fetch('https://api.thedogapi.com/v1/breeds',
        {
            headers: {'x-api-key': apiKey}
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch dog data: ${res.status}`);
    }

    const allDogInfo = await res.json();
    // randomizing the dog breeds to not get an alphabetical order of them
    const randomizedDogInfo = [...allDogInfo].sort(() => Math.random() - 0.5);
    // filtering out the dog breeds with no image
    const dogs = randomizedDogInfo
        .filter((dog: DogProps) => dog.reference_image_id)
        .slice(0, 30);

    return dogs.map((dog) => ({
        id: dog.id.toString(),
        name: dog.name,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        breed_group: dog.breed_group,
        bred_for: dog.bred_for,
        temperament: dog.temperament,
        origin: dog.origin,
        reference_image_id: dog.reference_image_id
    }));
}
