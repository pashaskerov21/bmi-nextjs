import { faqTranslateData } from "@/src/data";

export async function GET(request: Request) {
    try {
        let data = JSON.stringify(faqTranslateData);
        return new Response(data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({}), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}