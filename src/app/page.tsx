"use client";

import { useState } from "react";
import { Sparkles, Video, Loader2, Download, Play, Check, Crown, Zap, LogIn, UserPlus, ArrowRight, Wand2, Palette, Film, Layers, Zap as Lightning, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    if (!isAuthenticated) {
      alert("Por favor, faça login para gerar vídeos!");
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setGeneratedVideo(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setGeneratedVideo("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
      setIsGenerating(false);
    }, 4000);
  };

  const effectCategories = [
    {
      title: "Efeitos Visuais",
      icon: Wand2,
      effects: [
        {
          name: "Slow Motion",
          description: "Câmera lenta cinematográfica",
          thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          name: "Time Lapse",
          description: "Acelere o tempo",
          thumbnail: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=300&fit=crop",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          name: "Glitch Effect",
          description: "Efeito de falha digital",
          thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
          gradient: "from-red-500 to-orange-500"
        },
        {
          name: "Neon Glow",
          description: "Brilho neon vibrante",
          thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
          gradient: "from-pink-500 to-purple-500"
        }
      ]
    },
    {
      title: "Transformações",
      icon: Layers,
      effects: [
        {
          name: "Morphing",
          description: "Transformação suave entre formas",
          thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
          gradient: "from-green-500 to-emerald-500"
        },
        {
          name: "Particle Explosion",
          description: "Explosão de partículas",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
          gradient: "from-yellow-500 to-orange-500"
        },
        {
          name: "Liquid Effect",
          description: "Efeito de líquido fluindo",
          thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
          gradient: "from-cyan-500 to-blue-500"
        },
        {
          name: "Hologram",
          description: "Projeção holográfica",
          thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
          gradient: "from-indigo-500 to-purple-500"
        }
      ]
    },
    {
      title: "Filtros Cinematográficos",
      icon: Film,
      effects: [
        {
          name: "Vintage Film",
          description: "Estilo filme antigo",
          thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
          gradient: "from-amber-500 to-orange-500"
        },
        {
          name: "Noir",
          description: "Preto e branco dramático",
          thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
          gradient: "from-gray-500 to-gray-700"
        },
        {
          name: "Cyberpunk",
          description: "Estética futurista neon",
          thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
          gradient: "from-fuchsia-500 to-cyan-500"
        },
        {
          name: "Dreamy Soft",
          description: "Suave e onírico",
          thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
          gradient: "from-pink-400 to-purple-400"
        }
      ]
    },
    {
      title: "Animações",
      icon: Stars,
      effects: [
        {
          name: "Zoom Burst",
          description: "Explosão de zoom dinâmico",
          thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
          gradient: "from-orange-500 to-red-500"
        },
        {
          name: "Camera Orbit",
          description: "Rotação orbital da câmera",
          thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
          gradient: "from-blue-500 to-purple-500"
        },
        {
          name: "Parallax",
          description: "Efeito de profundidade 3D",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          gradient: "from-teal-500 to-green-500"
        },
        {
          name: "Kinetic Typography",
          description: "Texto animado dinâmico",
          thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
          gradient: "from-violet-500 to-purple-500"
        }
      ]
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "/mês",
      icon: Sparkles,
      features: [
        "5 vídeos por mês",
        "Resolução 720p",
        "Duração até 5 segundos",
        "Marca d'água",
        "Suporte por email"
      ],
      buttonText: "Começar Grátis",
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      price: "R$ 49",
      period: "/mês",
      icon: Zap,
      features: [
        "50 vídeos por mês",
        "Resolução Full HD (1080p)",
        "Duração até 30 segundos",
        "Sem marca d'água",
        "Suporte prioritário",
        "Exportação em MP4 e GIF"
      ],
      buttonText: "Assinar Pro",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "R$ 199",
      period: "/mês",
      icon: Crown,
      features: [
        "Vídeos ilimitados",
        "Resolução 4K",
        "Duração até 2 minutos",
        "Sem marca d'água",
        "Suporte 24/7",
        "API de integração",
        "Renderização prioritária",
        "Armazenamento em nuvem"
      ],
      buttonText: "Assinar Enterprise",
      popular: false,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const videoExamples = [
    {
      category: "Natureza",
      examples: [
        {
          prompt: "Um pôr do sol vibrante sobre o oceano com ondas suaves",
          videoUrl: "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/2169880/free-video-2169880.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Floresta tropical com cachoeira e raios de sol atravessando as árvores",
          videoUrl: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3571264/free-video-3571264.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Aurora boreal dançando no céu noturno sobre montanhas nevadas",
          videoUrl: "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/7710243/pexels-photo-7710243.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Ficção Científica",
      examples: [
        {
          prompt: "Cidade futurista com carros voadores e arranha-céus iluminados",
          videoUrl: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3129957/free-video-3129957.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Estação espacial orbitando um planeta alienígena colorido",
          videoUrl: "https://videos.pexels.com/video-files/6985295/6985295-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/6985295/pexels-photo-6985295.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Portal dimensional se abrindo com energia elétrica azul",
          videoUrl: "https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3141211/free-video-3141211.jpg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Fantasia",
      examples: [
        {
          prompt: "Floresta mágica com partículas brilhantes flutuando no ar",
          videoUrl: "https://videos.pexels.com/video-files/3571550/3571550-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3571550/free-video-3571550.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Castelo medieval no topo de uma montanha com dragão voando",
          videoUrl: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/5752729/pexels-photo-5752729.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Jardim encantado com flores luminosas e borboletas brilhantes",
          videoUrl: "https://videos.pexels.com/video-files/4828144/4828144-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/4828144/pexels-photo-4828144.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Urbano",
      examples: [
        {
          prompt: "Time-lapse de uma metrópole movimentada ao anoitecer",
          videoUrl: "https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/2611250/free-video-2611250.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Rua de Tóquio com letreiros neon refletindo na chuva",
          videoUrl: "https://videos.pexels.com/video-files/3015494/3015494-uhd_2560_1440_24fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3015494/free-video-3015494.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Skyline de Nova York com helicóptero sobrevoando",
          videoUrl: "https://videos.pexels.com/video-files/2491284/2491284-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/2491284/free-video-2491284.jpg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Abstrato",
      examples: [
        {
          prompt: "Formas geométricas coloridas flutuando e rotacionando",
          videoUrl: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Explosão de tinta colorida em câmera lenta",
          videoUrl: "https://videos.pexels.com/video-files/4063919/4063919-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/4063919/pexels-photo-4063919.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Ondas de energia luminosa pulsando em fundo escuro",
          videoUrl: "https://videos.pexels.com/video-files/3141205/3141205-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3141205/free-video-3141205.jpg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Animais",
      examples: [
        {
          prompt: "Leão majestoso caminhando na savana africana ao pôr do sol",
          videoUrl: "https://videos.pexels.com/video-files/5530915/5530915-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/5530915/pexels-photo-5530915.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Cardume de peixes tropicais nadando em recife de coral",
          videoUrl: "https://videos.pexels.com/video-files/4763575/4763575-uhd_2560_1440_25fps.mp4",
          thumbnail: "https://images.pexels.com/videos/4763575/pexels-photo-4763575.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          prompt: "Águia voando em câmera lenta sobre canyon",
          videoUrl: "https://videos.pexels.com/video-files/3571205/3571205-uhd_2560_1440_30fps.mp4",
          thumbnail: "https://images.pexels.com/videos/3571205/free-video-3571205.jpg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold">VideoAI Studio</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-black text-white border border-white hover:bg-gray-900">
              <Sparkles className="w-4 h-4 mr-2" />
              Créditos: {isAuthenticated ? "10" : "0"}
            </Button>
            {!isAuthenticated ? (
              <>
                <Link href="/login">
                  <Button className="bg-black text-white border border-white hover:bg-gray-900">
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Criar Conta
                  </Button>
                </Link>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="border-gray-700 hover:bg-gray-800"
                onClick={() => setIsAuthenticated(false)}
              >
                Sair
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Input */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crie vídeos incríveis com IA
              </h2>
              <p className="text-gray-400 text-lg">
                Descreva o que você quer e nossa IA transforma em vídeo
              </p>
            </div>

            <Card className="bg-gray-900 border-gray-800 p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Descreva seu vídeo
                </label>
                <Textarea
                  placeholder="Ex: Um astronauta flutuando no espaço com nebulosas coloridas ao fundo, câmera em movimento suave..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[200px] bg-black border-gray-700 text-white placeholder:text-gray-500 resize-none focus:border-purple-500 transition-colors"
                  disabled={isGenerating}
                />
                <p className="text-xs text-gray-500">
                  {prompt.length}/500 caracteres
                </p>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Gerando vídeo... {progress}%
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Gerar Vídeo
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="space-y-2">
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 text-center">
                    Processando sua criação...
                  </p>
                </div>
              )}
            </Card>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-sm text-gray-400">IA Avançada</p>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Video className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-sm text-gray-400">HD Quality</p>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 p-4 text-center">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Download className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">Download</p>
              </Card>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Preview</h3>
            <Card className="bg-gray-900 border-gray-800 aspect-video overflow-hidden">
              {generatedVideo ? (
                <div className="relative w-full h-full group">
                  <video
                    src={generatedVideo}
                    controls
                    className="w-full h-full object-cover"
                    autoPlay
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="bg-black/80 hover:bg-black backdrop-blur-sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-16 h-16 animate-spin text-purple-500 mb-4" />
                      <p className="text-lg font-medium">Criando seu vídeo...</p>
                      <p className="text-sm text-gray-600 mt-2">Isso pode levar alguns segundos</p>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                        <Play className="w-10 h-10 text-gray-600" />
                      </div>
                      <p className="text-lg font-medium">Seu vídeo aparecerá aqui</p>
                      <p className="text-sm text-gray-600 mt-2">Digite um prompt e clique em gerar</p>
                    </>
                  )}
                </div>
              )}
            </Card>

            {/* Video Info */}
            {generatedVideo && (
              <Card className="bg-gray-900 border-gray-800 p-4 space-y-3">
                <h4 className="font-semibold text-gray-300">Detalhes do Vídeo</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Resolução:</span>
                    <span className="text-gray-300">1920x1080 (Full HD)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duração:</span>
                    <span className="text-gray-300">5 segundos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Formato:</span>
                    <span className="text-gray-300">MP4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Pronto
                    </span>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Effects Categories Section */}
        <div className="mt-20 space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200">Efeitos e Transformações</h3>
            <p className="text-gray-400 text-lg">Explore nossa biblioteca de efeitos visuais profissionais</p>
          </div>

          {effectCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-200">{category.title}</h4>
                  </div>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.effects.map((effect, effectIndex) => (
                    <Card
                      key={effectIndex}
                      className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                      onClick={() => setPrompt(`Crie um vídeo com efeito ${effect.name}: ${effect.description}`)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={effect.thumbnail}
                          alt={effect.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${effect.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                          <h5 className="text-white font-semibold text-lg">{effect.name}</h5>
                          <p className="text-gray-300 text-sm">{effect.description}</p>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-purple-500/90 backdrop-blur-sm rounded-full p-3">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200">Escolha seu Plano</h3>
            <p className="text-gray-400 text-lg">Desbloqueie todo o potencial da criação de vídeos com IA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative bg-gray-900 border-gray-800 p-6 space-y-6 transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold text-gray-200">{plan.name}</h4>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Video Examples Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200">Galeria de Exemplos</h3>
            <p className="text-gray-400 text-lg">Vídeos reais criados com IA - clique para usar o prompt</p>
          </div>

          <div className="space-y-12">
            {videoExamples.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold text-purple-400 flex items-center gap-2">
                    <Video className="w-6 h-6" />
                    {category.category}
                  </h4>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.examples.map((example, i) => (
                    <Card
                      key={i}
                      className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer group"
                      onClick={() => setPrompt(example.prompt)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <video
                          src={example.videoUrl}
                          poster={example.thumbnail}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-purple-500/90 backdrop-blur-sm rounded-full p-4">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 space-y-3">
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
                          {example.prompt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="w-3 h-3" />
                          Clique para usar este prompt
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>Powered by VideoAI Studio • Transformando ideias em vídeos</p>
        </div>
      </footer>
    </div>
  );
}
