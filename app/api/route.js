import { NextResponse } from 'next/server';

export async function POST(req) {
  const { text } = await req.json();

  if (!text) {
    return NextResponse.json(
      { error: 'Text is required' },
      { status: 400 }
    );
  }

  // Random prediction logic (simulating an analysis)
  const isHateSpeech = Math.random() < 0.5;
  const confidence = (Math.random() * (0.9 - 0.6) + 0.6).toFixed(2);

  return NextResponse.json({
    text,
    is_hate_speech: isHateSpeech,
    confidence,
  });
}
