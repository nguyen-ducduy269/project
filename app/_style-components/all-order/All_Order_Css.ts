import styled from "styled-components";

export const AllOrderStyle = styled.div`
  .title {
    font-size: 28px;
    margin-top: 50px;
  }

  .orders {
    margin-bottom: 50px;
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 10px;
      th {
        background-color: #00644b;
        color: white;
      }
      th,
      td {
        text-align: left;
        padding: 15px 8px;
        text-align: center;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      tr:hover {
        background-color: #f8ba8c;
        color: white;
        td {
          a {
            color: white;
          }
        }
      }
      td {
        a {
          color: #f8ba8c;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .title {
      font-size: 18px;
    }

    .orders {
      overflow-x: auto;
      table {
        padding: 0px 10px;
        th,
        td {
          font-size: 14px;
          padding: 8px 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .title {
      font-size: 20px;
    }

    .orders {
      table {
        padding: 0px 10px;
        th,
        td {
          font-size: 16px;
          padding: 8px 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .title {
      font-size: 20px;
    }

    .orders {
      table {
        padding: 0px 10px;
        th,
        td {
          font-size: 18px;
          padding: 8px 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .title {
      font-size: 24px;
    }

    .orders {
      overflow-x: none;
      table {
        th,
        td {
          font-size: 18px;
          padding: 15px 8px;
        }
      }
    }
  }
`;
