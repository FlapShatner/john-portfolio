import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/nextJsImage";
import { photos } from "@/lib/photos";

const Photography = () => {

    // Breakpoints in px for the number of photos per row
    const fourColumns = 1400
    const threeColumns = 900
    const twoColumns = 600

    const rowConstraints = (w: number) => ({ maxPhotos: w > fourColumns ? 4 : w > threeColumns ? 3 : w > twoColumns ? 2 : 1 });

    return (
        <div className="w-full px-4">
            <h1 className="text-center py-6 text-2xl">Photography</h1>
            <PhotoAlbum
                photos={photos}
                layout="rows"
                rowConstraints={rowConstraints}
                renderPhoto={NextJsImage}
                defaultContainerWidth={1200}
                spacing={(containerWidth) => (containerWidth < 600 ? 5 : 10)}
            />
        </div>
    )
}

export default Photography