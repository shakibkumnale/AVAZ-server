import fetch from 'node-fetch';
import fs from 'fs';

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.buffer(); // Use buffer() instead of blob()
    return result;
}

query({"inputs": "rainbow color cat"}).then((response) => {
    // Save image to a file
    fs.writeFileSync('cat2.jpg', response);

    console.log('Image saved to image.jpg');
});
