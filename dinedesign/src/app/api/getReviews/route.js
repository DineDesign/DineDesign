import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('placeId');

    if (!placeId) {
        return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
    }

    console.log('API Key:', process.env.GOOGLE_PLACE_API_KEY);
    const apiKey = process.env.GOOGLE_PLACE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Google Places API key is not configured' }, { status: 500 });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const reviews = response.data.result.reviews || [];
            return NextResponse.json(reviews);
        } else {
            return NextResponse.json({ error: 'Google Places API returned an error', status: response.data.status, message: response.data.error_message }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reviews', details: error.message }, { status: 500 });
    }
}