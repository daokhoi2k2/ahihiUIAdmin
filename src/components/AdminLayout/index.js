import React, { useEffect, useRef, useState } from "react";
import NavDrawer from "components/NavDrawer";
import {
  AdminLayoutWrapper,
  Button,
  ChartDescription,
  ChartDescriptionItem,
  ChartWrapper,
  CircleIcon,
  Container,
  ContainerBody,
  Layout,
  ModalContent,
  ModalOverviewList,
  ModalOverviewTitle,
  ModalTitle,
  OverviewModalWrapper,
  OverviewModelHeader,
  OverviewModelItem,
  OverviewTitle,
  ProviderItem,
  ProviderName,
  TitleText,
  TopModalItem,
  TopModalWrapper,
} from "./styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import NavHeader from "./components/NavHeader";
import Select from "components/Select";
import ProductItem from "../ProductItem";
import ModelOverviewItem from "./components/ModelOverviewItem";
import { data, data2, data3, options } from "../../fakeData";

const AdminLayout = () => {
  const [isShowChart, setIsShowChart] = useState(true);
  const [isOpenNavDrawer, setIsOpenNavDrawer] = useState(true);
  const timer = useRef();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  // Handle re assgin chart when resize client (Bug in chart js with flex box and grid system)
  useEffect(() => {
    window.onresize = () => {
      clearInterval(timer.current);
      setIsShowChart(false);
      timer.current = setTimeout(() => {
        setIsShowChart(true);
      }, 1000);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  const chartData = {
    labels: ["13/9", "14/9", "15/9", "16/9"],
    datasets: [
      {
        label: "Doanh thu",
        data: [78314, 85313, 137312, 154372],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Lợi nhuận",
        data: [69243, 97224, 57331, 115032],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <AdminLayoutWrapper>
      <Layout>
        <NavDrawer isOpenNavDrawer={isOpenNavDrawer} />
        <Container>
          <NavHeader setIsOpenNavDrawer={setIsOpenNavDrawer} setIsShowChart={setIsShowChart} />
          <ContainerBody>
            <TopModalWrapper>
              <TopModalItem>
                <ModalTitle className="justify-between">
                  <TitleText>Top 10 sản phẩm xuất kho</TitleText>
                  <Select />
                </ModalTitle>
                <ModalContent className="overflowScrollY overflow-y-scroll max-h-[370px]">
                  {data.map((item, index) => (
                    <ProductItem
                      key={index}
                      name={item.name}
                      price={item.price}
                      sold={item.sold}
                      thumbnail={item.thumbnail}
                    />
                  ))}
                </ModalContent>
              </TopModalItem>
              <TopModalItem>
                <ModalTitle className="justify-between">
                  <TitleText>Top 10 nhà cung cấp nổi bật</TitleText>
                  <Select />
                </ModalTitle>
                <ModalContent className="justify-center px-8">
                  {data2.map((item) => (
                    <ProviderItem key={item.id}>
                      <img
                        src={require("../../assets/images/providerDefaultAvatar.png")}
                        alt={item.name}
                      />
                      <ProviderName>{item.name}</ProviderName>
                    </ProviderItem>
                  ))}
                </ModalContent>
              </TopModalItem>
            </TopModalWrapper>
            <OverviewModalWrapper>
              <OverviewModelItem>
                <OverviewModelHeader>
                  <ModalOverviewTitle>
                    <div className="font-bold text-xl">Tổng quan</div>
                    <span className="text-[11px] text-[#808080] ml-2">Cập nhật 5 phút trước</span>
                  </ModalOverviewTitle>
                  <Select />
                </OverviewModelHeader>
                <ModalOverviewList>
                  {data3.map((item) => (
                    <ModelOverviewItem
                      key={item.title}
                      value={item.value}
                      title={item.title}
                      icon={item.icon}
                    />
                  ))}
                </ModalOverviewList>
              </OverviewModelItem>
              <TopModalItem>
                <ModalTitle>
                  <TitleText>Thống kê đơn hàng</TitleText>
                  <ChartDescription>
                    <ChartDescriptionItem>
                      Doanh thu <CircleIcon className="bg-[#FFCECE]" />
                    </ChartDescriptionItem>
                    <ChartDescriptionItem>
                      Lợi nhuận <CircleIcon className="bg-[#9AD0F5]" />
                    </ChartDescriptionItem>
                  </ChartDescription>
                  <Button>Xuất Excel</Button>
                </ModalTitle>
                {isShowChart && (
                  <ChartWrapper>
                    <Bar options={options} data={chartData} />
                  </ChartWrapper>
                )}
              </TopModalItem>
            </OverviewModalWrapper>
          </ContainerBody>
        </Container>
      </Layout>
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
