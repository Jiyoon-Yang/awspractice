// 서버컴포넌트
import List from "@/components/33-01-shallow-routing/list";
import Pagination from "@/components/33-01-shallow-routing/pagination";
import Search from "@/components/33-01-shallow-routing/search";

export default function ShallowRoutingPage() {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}
