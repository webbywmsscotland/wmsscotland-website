"use client";

import Image from "next/image";
import { Camera, X } from "lucide-react";

interface ImageUploadProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  maxImages?: number;
}

export default function ImageUpload({
  images,
  setImages,
  maxImages = 5,
}: ImageUploadProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);

    const combined = [...images, ...selected].slice(0, maxImages);

    setImages(combined);
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">

      <label className="block text-sm font-semibold text-white">
        Add Photos (Optional)
      </label>

      <p className="text-sm text-gray-400">
        Photos often help diagnose the problem before I arrive.
      </p>

      <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-[#0b1220] p-8 transition hover:border-cyan-400">

        <Camera className="text-cyan-400" />

        <span className="font-semibold text-white">
          Choose Photos
        </span>

        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

      </label>

      {images.length > 0 && (

        <div>

          <p className="mb-4 text-sm text-cyan-400">
            {images.length} of {maxImages} photos selected
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

            {images.map((image, index) => (

              <div
                key={index}
                className="relative overflow-hidden rounded-2xl"
              >

                <Image
                  src={URL.createObjectURL(image)}
                  alt=""
                  width={300}
                  height={300}
                  className="aspect-square w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-2 top-2 rounded-full bg-red-600 p-1 text-white"
                >
                  <X size={16} />
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}