import type { Feature } from "$lib/utils/types";

export default [ 
  {
    name: 'Web Tasarımı',
    description:
      'Markanızı en iyi şekilde yansıtan, hızlı, modern ve kullanıcı odaklı web siteleri tasarlıyoruz.',
    image: 'images/features/markdown.jpg',
    tags: [{ label: 'Powered by MDsveX' }]
  }, 
  {
    name: 'Sosyal Medya Yönetimi',
    description:
      'İçerik stratejisinden tasarıma, paylaşımdan topluluk yönetimine kadar sosyal medyada markanızın sesini büyütüyoruz.',
    image: 'images/features/themeable.jpg',
    tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  }, 
  {
    name: 'Dijital Pazarlama',
    description:
      'Doğru hedef kitleye, doğru mesajla ulaşan kampanyalar kurguluyor; veriye dayalı sonuçlar üretiyoruz.',
    image: 'images/features/extensible.jpg',
  }, 
  {
    name: 'Marka Stratejisi',
    description:
      'Markanızın hedeflerini, dilini ve dijital yol haritasını birlikte şekillendiriyoruz.',
    image: 'images/features/optimized.jpg',
    tags: [{ label: 'Powered by Image Transmutation' }]
  }, 
  {
    name: 'İçerik Üretimi',
    description:
      'Dikkat çeken, markanızı anlatan ve hedef kitlenizle bağ kuran içerikler üretiyoruz.',
    image: 'images/features/light-dark.jpg',
  },
  {
    name: 'Reklam Yönetimi',
    description:
      'Bütçenizi verimli kullanan, performansı sürekli izlenen reklam kampanyaları yönetiyoruz.',
    image: 'images/features/open-source.jpg'
  },
] as Feature[];