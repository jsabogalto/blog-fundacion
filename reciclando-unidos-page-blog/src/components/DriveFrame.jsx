"use client";

function getDriveFileId(value) {
  if (!value) return null;
  const m1 = value.match(/\/file\/d\/([^/]+)/);
  if (m1) return m1[1];
  const m2 = value.match(/[?&]id=([^&]+)/);
  if (m2) return m2[1];
  const m3 = value.match(/\/d\/([^/]+)/);
  if (m3) return m3[1];
  return value;
}

export default function DriveFrame({ file, className = "h-[85vh]" }) {
  const id = getDriveFileId(file);

  if (!id) {
    return (
      <div
        className={`flex w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-500 ${className}`}
      >
        Documento no disponible.
      </div>
    );
  }

  return (
    <iframe
      src={`https://drive.google.com/file/d/${id}/preview`}
      title="Visor de documento"
      allow="autoplay"
      className={`w-full rounded-lg border border-gray-300 ${className}`}
    />
  );
}