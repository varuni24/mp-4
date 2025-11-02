import DogsDisplay from "@/components/DogList";
import getDogs from "@/lib/getDogs";

export default async function DogsPage() {
    const dogs = await getDogs();
    return <DogsDisplay dogList={dogs} />;
}
