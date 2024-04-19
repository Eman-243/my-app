"use client";
import { useParams } from 'next/navigation';
export default function SubCategoryPage() {
    const params = useParams();
  const category = params.category;
  const subcategory  = params.subcategory;
  return (
    <div>
      <pre>
      </pre>
    </div>
  );
};

//products/[categoryId]/[subcategoryId]/page.tsx