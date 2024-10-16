import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); // Liste tous les blobs
  // Filtrer les blobs pour exclure les dossiers

  const files = blobs.filter((blob) =>
    blob.pathname.includes("gallery/pictures") && (blob.pathname.includes(".JPG") || blob.pathname.includes(".jpg"))
  );
  return Response.json(files);
}
