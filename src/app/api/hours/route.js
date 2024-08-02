import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
    try {
      const filePath = path.join(process.cwd(),'src', 'app', 'Data', 'hours.json');
      console.log('Attempting to read file:', filePath);
      const data = await fs.readFile(filePath, 'utf8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      console.error('Error reading contact data:', error);
      return NextResponse.json({ error: 'Failed to read contact data', details: error.message }, { status: 500 });
    }
  }

export async function POST(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), 'src', 'app', 'Data', 'hours.json');
    await fs.writeFile(filePath, JSON.stringify(body, null, 2));
    return NextResponse.json({ message: 'Contact data updated successfully' });
  } catch (error) {
    console.error('Error updating contact data:', error);
    return NextResponse.json({ error: 'Failed to update contact data' }, { status: 500 });
  }
}