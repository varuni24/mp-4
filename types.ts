export type DogProps = {
    id: string;
    name: string;
    height: {
        imperial: string;
        metric: string;
    };
    weight: {
        imperial: string;
        metric: string;
    };
    life_span: string;
    breed_group?: string;
    bred_for?: string;
    temperament?: string;
    origin?: string;
    reference_image_id: string;
};
