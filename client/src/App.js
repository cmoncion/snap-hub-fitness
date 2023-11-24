import { useState } from "react";

function App() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    await fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="title"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit" onClick={handleSubmit}>
        upload
      </button>
    </>
  );
}

export default App;
