
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Arcèl Coat 01",
    price: "$1,250.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsxVugWpCXkqD1Kcae7i6D9PBXK-iyN_2G0n5vEziX0DO3zEOukDrdxTEgOUQGCXBIjKrpGwyFE7b8d6pS4djXC6hHN81FP2QySnjBZlOIOMseV-P0tCIg1OhLyRuvCJFw27F_5h2dA1UQ10qNCK-l9BQfr0TN1E3YarYKswKquDfPhHAa0yH0lR5wviALKRos4tx81rySiyYdkE39JgWyV4ytBWTKkGaETjAyLeepGh2cbI7PwTC-YbY-Yyjb-eehv25dGOd84",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4CTAzJGUaKud9AndhntNogazwNTqA_AytMPX3R-_Iagi1vrwnldx7Y0X5zGRP0K0ZujeQoDPyMuBn2hZIwFl34GtjDBPyaYvatw8ZB_aXi8pd1DTEXG3stQ6xK-vvwJ1dvh9g9BWL4DqnM57zFa5fyCR9C1lRUMVItayPRNR7yNiME7NrdsxEIh0xq72OksptCxSWs_Tp_dADJAvtKPOqPgRAI_G_xz9CaYxEXP--3A5nqMrPx7bnIhUIzpDrxaT37g8BjB0Tgkg",
    alt: "Minimalist long grey wool coat"
  },
  {
    id: 2,
    name: "Arcèl Trouser 02",
    price: "$280.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcbcfNrGUwjxeSNAjFEKyNp4fCAlccnbuDoOfJK8T807ejE3IiaDVo_gTNHQH_4RQiHk3lsF5ymok9RYaCWWHIlvm9wfjWkNsw075JjdIXwVFqdSBH9XIq8obRIyK9o9o0RRS4pT9qLPfPARFJac6sLFrYE6UrdTKwquJkWuiEL3kD4V1IFsfHzqTeLY1ZGq_QsPjoJv0-DPskWqc31FfozfDpVBmLj6DrVrTIrwmu3ReQhX2CGpxp5_2Pqr9XNOHoq6CHFRmON_A",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsvIqSRCes0Jrqyk2AL2Es1K2Vn-Ghaq_GqdTkSsrAnCldyC7g0DVJHNUvlXzgEj1q6XvMH-6WriWJVuuDvG-g4GN194cQnn-yt-b1HKJ3GLxglt824FBVbuAErF81n38dAs6XMJdiaDyA5EbmkGwXeKGP0dHkwEF9zpYh-R1CoOeZT9E6JDoKkS0YGsTz5RV7KrkmxacJYsPqYosVvJwIFjHFEM757aS2FwTO5kGphzGFVdty_VexgKuND6LfeJ0DXjYGHqJSybw",
    alt: "Wide leg tailored beige trousers"
  },
  {
    id: 3,
    name: "Arcèl Knit 04",
    price: "$320.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiM2XDNBNLbXeaNItKWmNmyw8RI9xFksNxCzJnn3s4Vfh2-cTxpdSad5_hbcvjmCnWeBWWzG3PikFOsHkunfi7x7lTFkQnGgoqb6L5zM03PyQUGiUPOP762-2rSXhFN9SCtC5CXJi-dToTXBDumEmurw6wGbCApt5iEb5huxC-85Z7pkBQb4fJRK4H2p75cHHXreuvvMGSRWCY3Uj4g5FY-3KEc-R08ItKgdZAF0yqSU58nJ3cb4LdrozblP54tzzVPX8nbTmcsKI",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OYeOYnXkpKpYHA04YGmz3KVypzoIvdO8BkSNI5SEyMIQc_kbn33Ww9qGe1cLXBfC_OE2KJgxcciqkk8kJkI5WS5dRrZdC9wo8DTuN-dafLNbBFO9mVi6in3BaGUBIpBZ_RJA8UMr1EHeomiSRksh25j8muY3R4kXu7FdYBqyHWz6epa-J01tOMCzApf8kKOPAOomHYfbxnDkn0WgS73IJCe9HRu4vfIMofDtykbzCc341GylFtdnPT30qHjlgiVoZZjPypsCKdo",
    alt: "Cream knit sweater"
  },
  {
    id: 4,
    name: "Arcèl Shirt 01",
    price: "$210.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDp1TfAuMMnxYXfWIEbx7YqzjKLDq0a6uXaCtE0OXp5m5MdD2YMkEahFpc1_oPxVAOLX0S_1SFNVO-VMcH-eNe6SC9pWz3gn5stkQdzQZB3lJ8evW0hjgAEddKSwdz-sfqLIrDC3qmN4_qCqjRUrFj0pzR9tvlpyDbr1aBtmxDFfMMq1-aIWs7LWbG0Z1tr5lITI6zzbJlU2L8w70-lUAjWAsYyhARvm7pAPEULiC-CcBt256W-JXSbZ7aNEPLmUmsrQA48xpxJVg",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMt0bw_xU5tpF_5B-H71scgjTUSf9aNdZjRy23K-yCPYXo2VAxC6k70K4Tk47X0G3Cu7VZv_gsvi1e5D26fEBMkWyEIpSofWzAWVEK_GjXoOMxC9IjuIUkpmh3rx_6Q9d9kzvCBGUk6P1-iTpQEZiU5rGdijkIi18zHROh-7nFHS29FR2Eo4IxJMxaO1jV95ZlH6yU0WEOcjStb-bb-lobQ5YEgvxyxPJRw3yToPW-TSgXfc6BdGtmmHrdHx39A0YxDQqmvByTsi8",
    alt: "White silk button down shirt"
  },
  {
    id: 5,
    name: "Arcèl Dress 05",
    price: "$540.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCChQL-UsS4VVJLqz_jcVXMmk8SJ_yP_bFwPvXTFN_5PHxaRaXuqGGjjgwyl63j7QlJEyC4ItDTEtu8s0Ksy7p3Z8iuKOJPFAoTVU86FYIxOLuxvexfU6TOHfeqLQo_QOkgLkKmyScVj4i347b2MJhzyEHpolaBXTegc_-ByWtQCxk2xUY4-Ec9TBMZNI6tYqm7-EEQ4023FKBF2DKvR11ilYJvc_Yd81mMyfxPXIG6nyWTdkX64NTdJ8CYZpoTWdxYxuvu0l_b-54",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1LD85-s_q1WyKio5wTcxijyrysitY7FyiCr9AP507dlL63pJUYEYzqYST68S1BfxtpbwQ9NgBQPaNBEbz38a9_PhKzd29UK7GOuBESEG7S9HbcoHLQV9Y2JeQM8Mf2-tIiHPTzBoPvk886Qb_XqV6qcBpWn052zG1D-KXIMexlF437F0aRvkN03_Skkq8GcByJVE2EBukRSGDbaTxJUJcUlSfu1p5Gv1ay9LynfHaAh9VTw35OBtI7ynl3J36xOpsc-VO4B5ytsg",
    alt: "Long dark pleated dress"
  },
  {
    id: 6,
    name: "Arcèl Tote",
    price: "$390.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQD0zk0nXX-OEz8lwOaRRmJK5FBjwDIj9mIt6ZskUIQrWAb9VSnj7AvFptixkUxmpu6c5KmPEQHIGbvs8jckJVmseqGG488WbuZBREvq7CDJ76FB9SsfUQWLKVBmduk1WbMQ_IWV1u5-hFpw5eB83p-PyhDdB5A71prP4yLNTW7dPE0UonDO-Dzp5mAluK_65kLK0xoDCJhyZRr0A_cm8otKR89Ex4b-wCwvG8zFNJEQu7uE1j11CkzWJ1xLV6kdJOsQNx-W58WBw",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYLSBufAdbwMZWfNi8aEx2Yk44gXuThEs9vXSLjFSx_YWv4fcj9HzGVb87iCa6C4JxFgGGhdJ_rsg0BgaZzO2LQfngvFiqeAZPmQaW1eHsOfliqeuZm3K1p3ipQE7EblSAlhYSWh7BtA5NbROEyESUJGKSADtq2Pe20LycOjSc7zAABRdSl9SJdH-K7UAmmctJdYj18kP7Mo1A8Ri_KEHcuEAmnpHH7iQXbX_TCmDsIg49uN5WYuQ8db7VNoY1zkxYKeedH478Tpo",
    alt: "Minimal leather tote bag"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface ProductListProps {
  onProductClick: () => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
  return (
    <section id="shop" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-24">
      
      {/* Page Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-32 max-w-2xl mx-auto space-y-6">
        <h2 className="font-serif text-5xl md:text-6xl text-[#111815] font-medium tracking-tight">Wardrobe</h2>
        <div className="w-12 h-[1px] bg-[#14b881]/40"></div>
        <p className="text-[#63756d] text-base md:text-lg leading-relaxed font-light max-w-lg">
            A study in restraint. Our permanent collection is produced in limited quantities to ensure minimal waste and maximum attention to detail.
        </p>
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-24 lg:gap-x-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={`group cursor-pointer flex flex-col gap-4 ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
            variants={itemVariant}
            onClick={onProductClick}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f0f4f3] rounded-sm">
              {/* Main Image */}
              <div 
                className="absolute inset-0 bg-center bg-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
                aria-label={product.alt}
              />
              {/* Secondary Image (Hover) */}
              <div 
                className="absolute inset-0 bg-center bg-cover z-10 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                style={{ backgroundImage: `url('${product.hoverImage}')` }}
                aria-label={`${product.alt} detail`}
              />
            </div>

            <div className="flex justify-between items-baseline pt-2">
              <h3 className="font-serif text-xl md:text-2xl text-[#111815] tracking-wide group-hover:text-[#14b881] transition-colors duration-300">
                {product.name}
              </h3>
              <span className="text-sm md:text-base font-medium text-[#63756d] font-sans">
                {product.price}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination / Load More */}
      <div className="flex justify-center mt-32">
        <button className="group flex items-center gap-2 text-[#63756d] hover:text-[#111815] transition-colors uppercase tracking-widest text-xs font-semibold">
          <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          Load More
        </button>
      </div>
    </section>
  );
};
