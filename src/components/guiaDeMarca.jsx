'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import '@/styles/globals.css'

export default function Component() {
  const [activeTab, setActiveTab] = useState('colores')

  // Colores y para copiarlos al portapapeles
  const colores = {
    Naranja: '#F59A55', // Naranja corporativo
    Gris: '#3A3B38',    // Gris oscuro para texto
    Blanco: '#FFFDFA', // Blanco sucio para fondos
    Beige: '#FBF5E9', // Color background en feed de instagram (Beige cálido)
    Verde: '#2A9D8F', // Color acento 1 (turquesa)
    Coral: '#CD7D64', // Color acento 2 (coral)
  }

  const copiarColor = (color) => {
    navigator.clipboard.writeText(color)
      .then(() => alert(`Color ${color} copiado al portapapeles`))
      .catch(err => console.error('Error al copiar el color: ', err))
  }

  // Tipografias para copiarlas al portapapeles
  const copiarEnlaceFuente = (enlace) => {
    if (enlace) {
      navigator.clipboard.writeText(enlace)
        .then(() => alert(`Enlace de fuente copiado al portapapeles: ${enlace}`))
        .catch(err => console.error('Error al copiar el enlace: ', err));
    }
  };

  // para descargar la imagen
  const descargarImagen = (url, nombre) => {
    const link = document.createElement('a')
    link.href = url
    link.download = nombre
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <div className='flex items-center justify-center gap-3'>
            <CardTitle className="text-center text-3xl font-medium font-Titulos text-text">Guía de marca</CardTitle>
          </div>
          <div class="bg-white rounded-lg shadow-lg border-2 flex items-center justify-center">
            <img 
              src="/inno.png" 
              alt="INNOVATEProweb banner" 
              class="max-w-full h-auto rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 h-fit">
              <TabsTrigger value="colores">Colores</TabsTrigger>
              <TabsTrigger value="tipografia">Tipografía</TabsTrigger>
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="identidad">Identidad</TabsTrigger>
            </TabsList>

            {/* COLORES */}
            <TabsContent value="colores" className="space-y-6">
              <h3 className="text-2xl font-Titulos font-semibold text-text mb-4">Colores de la marca</h3>
              <p className="text-sm text-muted-foreground mt-4">
                Haz clic en el color para descargar el color al portapapeles.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-4">
                {Object.entries(colores).map(([nombre, color]) => (
                  <div 
                    key={nombre} 
                    className="space-y-2 cursor-pointer"
                    onClick={() => copiarColor(color)}>
                    <div
                      className="w-full h-24 rounded-lg shadow-md"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-sm font-medium capitalize">{nombre}</div>
                    <div className="text-xs font-mono">{color}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 ">
                <p className="text-sm text-primary">
                  El naranja usado para acentos y el icono de la marca.
                </p>
                <p className="text-sm text-text">
                  El color gris oscuro/negro para textos principales y el logotipo.
                </p>
                <p className="text-sm w-fit text-background bg-accent1">
                  El color blanco sucio para fondos y áreas amplias.
                </p>
                <p className="text-sm w-fit text-instagramBackground bg-accent2">
                  El color beige para fondos.
                </p>
                <p className="text-sm text-accent1">
                  El verde para destacar elementos y crear contraste. 
                </p>
                <p className="text-sm text-accent2">
                  El coral para destacar elementos y crear contraste. 
                </p>
              </div>
            </TabsContent>

            {/* TIPOGRAFIA */}
            <TabsContent value="tipografia" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-Titulos font-semibold text-text">Sistema tipográfico</h3>
                <p className='text-text'>Haz clic para copiar el enlace de Google Fonts</p>
                <div className="space-y-6">
                  <div 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    onClick={() => copiarEnlaceFuente('https://fonts.google.com/specimen/League+Gothic')}>
                    <h1 className="text-4xl font-medium font-Logo">INNOVATEProweb</h1>
                    <p className="text-sm text-muted-foreground">
                    League Gothic - Uso: Logo "INNOVATEProweb"
                    </p>
                  </div>
                  <hr/>
                  <div 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    onClick={() => copiarEnlaceFuente('https://fonts.google.com/specimen/Montserrat')}>
                    <h2 className="text-2xl font-semibold font-Titulos">Títulos</h2>
                    <p className="text-sm text-muted-foreground">
                    Montserrat - Uso: Títulos y encabezados en la web
                    </p>
                  </div>
                  <hr/>
                  <div 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    onClick={() => copiarEnlaceFuente('https://fonts.google.com/specimen/Inter')}>
                    <p className="text-base font-normal font-Textos">
                    Textos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Inter / Uso: Texto de cuerpo en la web
                    </p>
                  </div>
                  <hr/>
                  <div 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    onClick={() => copiarEnlaceFuente('https://fonts.google.com/specimen/Dancing+Script')}>
                    <p className="text-base font-normal font-instagram1">
                    Instagram
                    </p>
                    <p className="text-sm text-muted-foreground">
                    Dancing Script / Uso: Acentos y frases cortas en Instagram
                    </p>
                  </div>
                  <hr/>
                  <div className="space-y-2">
                    <p className="text-base font-normal font-Textos">
                    Instagram - Esta fuente se puede usar en canva pero no esta disponible para descargar en Google Fonts
                    </p>
                    <p className="text-sm text-muted-foreground">
                    Black Mango / Uso: Acentos y frases cortas en Instagram
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* LOGOS */}
            <TabsContent value="logo" className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-Titulos font-semibold text-text">Pautas del logo</h3>
                <p className="text-sm text-muted-foreground mt-4"> Haz clic en la imagen para descargarla.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Espacio libre</h4>
                      <div className="aspect-video bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center p-6">
                        <img 
                          src="/logo.png" 
                          alt="Logo con espacio libre" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Mantén un espacio libre alrededor del logo igual a la altura de las letras minúsculas.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Tamaño mínimo</h4>
                      <div className="space-y-4">
                        <div className="w-32">
                          <img 
                            src="/logo.png" 
                            alt="Tamaño mínimo del logo" 
                            className="max-w-full h-auto"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ancho mínimo: 120px para digital, 3.8 cm para impresión
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Logo Principal</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/logo.png" 
                          alt="Logo Principal" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Versión principal del logotipo para uso general
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logoGif.gif')}>
                      <h4 className="font-medium mb-4 text-accent1">Gif</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                      <img
                        src="/logoGif.gif"
                        alt="Logo animado"
                        className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Versión principal del logotipo con movimiento
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo4.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Isotipo</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/logo4.png" 
                          alt="Isotipo" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Icono de nube y cohete para espacios reducidos fondo blanco "sucio"
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                    className="p-6 cursor-pointer"
                    onClick={() => descargarImagen('/innovate.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Sin background</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/innovate.png" 
                          alt="Isotipo" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Sin ningun fondo
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo2.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Versión 2</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/logo2.png" 
                          alt="Isotipo" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Variante fondo beige
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => descargarImagen('/logo3.png')}>
                      <h4 className="font-medium mb-4 text-accent1">Versión Oscura</h4>
                      <div className="aspect-video bg-white rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/logo3.png" 
                          alt="Versión Oscura" 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Para uso sobre fondos oscuros (gris oscuro/negro)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* INSTAGRAM */}
            <TabsContent value="instagram" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-Titulos font-semibold text-text">Pautas para Instagram</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* FEED */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Estilo de Feed</h4>
                      <div className="aspect-square bg-[#FDF6F0] rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/feed.png" 
                          alt="Ejemplo de Estilo de Feed" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Alterna entre imágenes de proyectos, contenido educativo e informativo, citas inspiradoras. Mantén una paleta de colores consistente.
                      </p>
                    </CardContent>
                  </Card>

                  {/* REELS */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Reels</h4>
                      <div className="aspect-square bg-[#FDF6F0] rounded-lg flex items-center justify-center p-6">
                        <img 
                          src="/reel1.png" 
                          alt="Ejemplo Reels" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      <img 
                          src="/reel2.png" 
                          alt="Ejemplo de Reels" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Usa plantillas consistentes con los colores de la marca. Ejemplos de cada una.
                      </p>
                    </CardContent>
                  </Card>

                  {/* HISTORIAS */}
                  <Card>
                  <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Historias</h4>
                      <div className="aspect-square bg-[#FDF6F0] rounded-lg flex flex-wrap items-center justify-center p-6">
                        <img 
                          src="/historia1.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      <img 
                          src="/historia2.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                         <img 
                          src="/historia3.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      <img 
                          src="/historia4.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                         <img 
                          src="/historia5.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      <img 
                          src="/historia6.png" 
                          alt="Ejemplo historia" 
                          className="max-w-[50%] h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Plantillas: innovatip y sabias que son iguales. Frase de buen día. Dia internacional de... Memercoles imagen. Memercoles video.
                      </p>
                    </CardContent>
                  </Card>

                  {/* POST */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Post</h4>
                      <div className="aspect-square bg-[#FDF6F0] rounded-lg flex flex-wrap items-center justify-center p-6">
                        <img 
                          src="/feedizquierdoclaro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                      <img 
                          src="/feedizquierdooscuro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                         <img 
                          src="/feedcentroclaro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                      <img 
                          src="/feedcentrooscuro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                         <img 
                          src="/feedderechoclaro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                      <img 
                          src="/feedderechooscuro.png" 
                          alt="Ejemplo post" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                         <img 
                          src="/PLANTILLA1.png" 
                          alt="Plantilla post proyecto feed izquierdo claro" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                          {/* <img 
                            src="/" 
                            alt="Plantilla post proyecto feed izquierdo oscuro" 
                            className="max-w-[50%] h-auto rounded-lg my-6"
                          /> */}
                      <img 
                          src="/PLANTILLA2.png" 
                          alt="Plantilla post proyecto feed centro claro" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                          {/* <img 
                              src="/" 
                              alt="Plantilla post proyecto feed centro oscuro" 
                              className="max-w-[50%] h-auto rounded-lg my-6"
                            /> */}
                         <img 
                          src="/PLANTILLA3.png" 
                          alt="Plantilla post proyecto feed derecho claro" 
                          className="max-w-[50%] h-auto rounded-lg mb-2"
                        />
                         {/* <img 
                          src="/" 
                          alt="Plantilla post proyecto feed derecho oscuro" 
                          className="max-w-[50%] h-auto rounded-lg my-6"
                        /> */}
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Usa plantillas consistentes con los colores de la marca. Ejemplos de cada una.
                      </p>
                    </CardContent>
                  </Card>

                  {/* HASH */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Uso de Hashtags</h4>
                      <div className="bg-[#FDF6F0] rounded-lg p-6">
                        <p className="text-sm font-medium text-primary">
                          #INNOVATEProweb #DesarrolloWeb #DiseñoWeb #MarketingDigital #InnovaciónTecnológica
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Incluye siempre #INNOVATEProweb y al menos 5 hashtags relevantes al contenido y la industria.
                      </p>
                    </CardContent>
                  </Card>

                  {/* HERRAMIENTAS DE GESTION */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Herramientas de Gestión</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <strong>Meta Business Suite:</strong> Programación de publicaciones y análisis de métricas.
                          <a href="https://app.asana.com/0/1208690104642750/1208690104642806" target="_blank" rel="noopener noreferrer" className="block mt-1 text-primary hover:underline">
                            Acceder al planificador/analista de métricas desde el link en Asana
                          </a>
                        </li>
                        <li>
                          <strong>ManyChat:</strong> Automatización de respuestas y mejora en la atención al cliente.
                          <a href="https://app.asana.com/0/1208690104642750/1208690104642806" target="_blank" rel="noopener noreferrer" className="block mt-1 text-primary hover:underline">
                            Acceder a ManyChat desde el link en Asana
                          </a>
                        </li>
                        <li>
                          <strong>Canva:</strong> Creación de contenido visual atractivo alineado con la identidad de la marca.
                          <div className="mt-1 space-y-1">
                            <a href="https://app.asana.com/0/1208690104642750/1208690104642806" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                              Visual feed / Historias / Post desde el link en Asana
                            </a>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* IDENTIDAD */}
            <TabsContent value="identidad" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-Titulos font-semibold text-text">Identidad</h3>
                <p className='text-text'>Haz clic para abrir el enlace de cada documento</p>
                <div className="space-y-8">

                  <a 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    href='https://docs.google.com/document/d/1xBjM201ulgwtDDatcjkm7Fvcr-L6ilnon_dTizbjz8I/edit?tab=t.0' target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base md:text-lg xl:text-3xl font-medium">Quiénes somos</h3>
                  </a>
                  <hr/>
                 
                  <a 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    href='https://drive.google.com/file/d/1_p0gtn6VT9lrty8FqyLH3-viQmtk0Vpo/view' target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base md:text-lg xl:text-3xl font-normal">Definición de Buyer Persona, User Persona y Público Objetivo</h3>
                  </a>
                  <hr/>

                  <a 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    href='https://docs.google.com/document/d/1C3-t7ySTfyR0X9QR66cgsqm7yJIhBtsxqcIclDNb1Ls/edit?tab=t.0#heading=h.f440g3oajriw' target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base md:text-lg xl:text-3xl font-normal">Encuesta de Feedback para Clientes</h3>
                  </a>
                  <hr/>

                  <a 
                    className="space-y-2 cursor-pointer hover:text-primary"
                    href='https://docs.google.com/document/d/1Q7xr9xMAgfxv6sCSFlUnXB0c5zQ69PsKVbJpuUYIEpY/edit?tab=t.0' target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base md:text-lg xl:text-3xl font-normal">Business Model Canvas - SCRUM </h3>
                  </a>
                  <hr/>
                  
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}