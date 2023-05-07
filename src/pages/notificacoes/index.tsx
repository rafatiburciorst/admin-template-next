import Layout from "@/components/templates/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notify() {
    const ctx = useAppData()
    return (
        <Layout title="Notificações" subtitle="Aqui você irá gerenciar as suas notificações">
            <h3>Conteúdo</h3>
            <h3>{ctx.theme}</h3>
        </Layout>
    )
}