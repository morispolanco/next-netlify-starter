import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import fetch from 'node-fetch'

export default function Home() {
  const [response, setResponse] = useState(null)

  const fetchSpellCheck = async () => {
    try {
      const response = await fetch('https://api.respell.ai/v1/run', {
        method: 'POST',
        headers: {
          authorization: 'Bearer 260cee54-6d54-48ba-92e8-bf641b5f4805',
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          spellId: 'AMS1u_FAWQea7sxE6Ffu6',
          spellVersionId: 'sU33jCqGk0-RJKDxeiWif',
          inputs: {
            pregunta: 'Example text',
            estado: 'Example text',
          },
        }),
      })
      setResponse(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSpellCheck()
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        {response && (
          <div>
            <h2>Spell Check Results</h2>
            <p>{response.data.results[0].message}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

