import { Skeleton } from "../ui/skeleton";

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <div className="border-b p-4">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-24" />
            ))}
          </div>
        </div>
        <div className="p-4">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex space-x-4 py-3 border-b last:border-b-0">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton key={colIndex} className="h-4 w-20 flex-1" />
              ))}
              <div className="flex space-x-2">
                <Skeleton className="h-8 w-8 rounded" />
                <Skeleton className="h-8 w-8 rounded" />
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function ImageGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="relative group">
          <Skeleton className="w-full aspect-square rounded-lg" />
          <div className="absolute top-2 right-2 flex space-x-1">
            <Skeleton className="h-6 w-6 rounded" />
            <Skeleton className="h-6 w-6 rounded" />
          </div>
          <div className="absolute bottom-2 left-2">
            <Skeleton className="h-4 w-8" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ImageUploadSkeleton() {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-12 rounded-full mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-48 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
          <Skeleton className="h-10 w-32 mx-auto" />
        </div>
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-4 w-24" />
        <ImageGridSkeleton count={6} />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <div className="rounded-lg border">
          <div className="p-4 border-b">
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <div className="flex space-x-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FiltersSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-48" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-24" />
      </div>
      <Skeleton className="h-10 w-20" />
    </div>
  );
}

export function DialogSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      
      <FormSkeleton />
      
      <div className="space-y-4">
        <Skeleton className="h-4 w-20" />
        <ImageUploadSkeleton />
      </div>
      
      <div className="flex justify-end space-x-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}

export function NavigationSkeleton() {
  return (
    <nav className="space-y-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-3 px-3 py-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </nav>
  );
}

export function HeaderSkeleton() {
  return (
    <header className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </header>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <Skeleton className="w-full h-48 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-6 w-16" />
      </div>
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-20 rounded" />
      </div>
    </div>
  );
}

export function ListItemSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4 rounded" />
            </div>
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6 space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-64 w-full" />
        </div>
        <div className="bg-white rounded-lg border p-6 space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}
