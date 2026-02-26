// TODO: Replace with real email sending via Resend (resend.com) or similar
export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log('Contact form submission:', body)

        // Add real email sending logic here
        // Example: await resend.emails.send({ from: '...', to: 'abdul@...', ... })

        return Response.json({ success: true })
    } catch (error) {
        console.error('Error in contact form submission:', error)
        return Response.json({ success: false, error: 'Failed to submit' }, { status: 500 })
    }
}
