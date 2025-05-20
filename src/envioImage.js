


//PARA FAZER DOWNLOAD DA IMAGEM

//PARA DOWNLOAD
export const sendToWhatsApp = async (selectedShirt, selectedArt) => {
  console.log('Entrou 0...')
  if (!selectedShirt || !selectedArt) {
    alert("Selecione a camisa e a arte antes de continuar.");
    return;
  }
  

  const loadImage = (src) => {
    console.log('Entrou 2...')
    return new Promise((resolve, reject) => {
      if (!src) {
        reject("URL da imagem está indefinida ou nula.");
        return;
      }
      console.log('Entrou 3...')
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous"; // Evitar problemas de CORS
      img.onload = () => resolve(img);
      img.onerror = (error) => {
        console.error(`Erro ao carregar a imagem: ${src}`, error);
        reject(`Erro ao carregar a imagem: ${src}`);
      };
    });
  };

  
  try {
    
    const shirtFront = await loadImage(selectedShirt.caminhoImagemFrente);
    const shirtBack = await loadImage(selectedShirt.caminhoImagemCostas);
    const artImage = await loadImage(selectedArt.caminhoImagemEstampa);

    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 500;
    const context = canvas.getContext("2d");

    context.drawImage(shirtFront, 0, 0, 500, canvas.height);

    if (artImage) {
      const estampaWidth = 85;
      const estampaHeight = 85;
      const estampaX = 290;
      const estampaY = 80;
      context.drawImage(artImage, estampaX, estampaY, estampaWidth, estampaHeight);
    }

    context.drawImage(shirtBack, 500, 0, 500, canvas.height);

    if (artImage) {
      const estampaWidth = 280;
      const estampaHeight = 320;
      const estampaX = 610;
      const estampaY = 50;
      context.drawImage(artImage, estampaX, estampaY, estampaWidth, estampaHeight);
    }

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "camisa_personalizada_lado_a_lado.png";
        link.click();
        URL.revokeObjectURL(url);
        console.log("Download realizado com sucesso!");
      } else {
        console.error("Erro ao converter canvas para blob.");
      }
    }, "image/png");

  } catch (error) {
    console.error("Erro ao gerar a imagem:", error);
    alert(`Erro: ${error}. Verifique as URLs fornecidas.`);
  }
};



export const sendMessageToWhatsApp = async (clienteWhatsApp, selectedShirt, selectedArt) => {


  if (!selectedShirt || !selectedArt) {
    alert("Selecione a camisa e a arte antes de enviar a mensagem.");
    return;
  }


  
  const uploadImageToBackend = async (blob) => {
    console.log("Vai entrar no fech")
    const formData = new FormData();
    const file = new File([blob], "camiseta.png", { type: blob.type });
    formData.append("image", file);

    const response = await fetch(`https://custom-back-zxiu.onrender.com/upload`, {
      method: "POST",
      body: formData,


    });
    console.log('fez o fetch')

    if (!response.ok) {
      throw new Error("Erro ao enviar imagem para o servidor.");
    }

    const data = await response.json();
    
    console.log('data,url é:.... ' + data.url)
    return data.url 

  };


  try {
    
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 500;
    const context = canvas.getContext("2d");
   

    const loadImage = (src) => {
      console.log("O SRC AQUI É:..." + src)
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        img.onload = () => resolve(img);
        img.onerror = (error) => {
          console.error("Erro ao carregar imagem:", error);
          reject(error);
        };
      });
    };


    let shirtF = `https://custom-back-zxiu.onrender.com/imgsCamisas/${selectedShirt.caminhoImagemFrente}`
    let shirtC = `https://custom-back-zxiu.onrender.com/imgsCostas/${selectedShirt.caminhoImagemCostas}`
    let artL = `https://custom-back-zxiu.onrender.com/imgsIcons/${selectedArt.caminhoImagemLogo}`
    let artE = `https://custom-back-zxiu.onrender.com/imgsEstampas/${selectedArt.caminhoImagemEstampa}`




    const shirtFront = await loadImage(shirtF);
    const shirtBack = await loadImage(shirtC);
    const artFront = await loadImage(artL);
    const artBack = await loadImage(artE);








    
    context.drawImage(shirtFront, 0, 0, 500, 500);
    context.drawImage(shirtBack, 500, 0, 500, 500);
    context.drawImage(artFront, 290, 80, 85, 100);
    context.drawImage(artBack, 620, 50, 250, 370);

    
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

  
    const imageUrl = await uploadImageToBackend(blob);


    const message = `Olá! Gostaria de personalizar uma camisa com os seguintes detalhes:\n\n` +
      `- Modelo da camisa: Frente (${selectedShirt.caminhoImagemFrente}), Costa (${selectedShirt.caminhoImagemCostas})\n` +
      `- Estampa escolhida: ${selectedArt.caminhoImagemEstampa}\n\n` +
      `Visualize a prévia da camisa aqui: ${imageUrl}\n\n` +
      `Por favor, entre em contato para mais informações.`;

    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${clienteWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    console.log("Mensagem enviada para o WhatsApp: ", whatsappUrl);
  } catch (error) {
    console.error("Erro ao enviar mensagem para o WhatsApp:", error);
    alert("Houve um erro ao gerar a imagem ou enviar a mensagem.");
  }
};

