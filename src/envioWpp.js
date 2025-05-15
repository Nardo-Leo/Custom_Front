


const uploadImage = async (imageFile) => {
 
//PELO GOOGLE DRIVE
    const formData = new FormData();
    formData.append("image", blob, "camisa.png");
    
    const response = await fetch(`https://custom-back-zxiu.onrender.com/upload`, {
      method: "POST",
      body: formData,
    });
    
    const data = await response.json();
    
    return data.url; 
    
  };

 