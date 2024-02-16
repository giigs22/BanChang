import axios from "axios";

class convertImage{
    async toBase64(file) {
        console.log(file);
        const response = await fetch(file);
        const blob = await response.blob();
        
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
        
            reader.onloadend = () => {
                resolve(reader.result);
            };
            
            reader.onerror = reject;
            
            reader.readAsDataURL(blob);
        });
    }
}
export default new convertImage();