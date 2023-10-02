import { COLOR_MODELS, COLOR_PAGE, COLOR_SUB_MODELS } from "./vars.js";

// определение массива элементов и связей между ними
const nodeDataArray = [
  {
    key: "app.py",
    description:
      `
      Основной файл<br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Cumque harum dignissimos quis ad officiis eaque voluptates odit soluta, unde 
      nobis ut iste accusamus distinctio aliquam consequatur iure voluptas enim nisi
      `,
    color: COLOR_MODELS,
  },
  { key: "config.py", color: COLOR_MODELS },
  { key: "database.py", color: COLOR_MODELS },
  { key: "vmachine.py", color: COLOR_MODELS },
  { key: "htmlpy_core", color: COLOR_SUB_MODELS },
  { key: "Objects", color: COLOR_MODELS },
  { key: "Page", color: COLOR_MODELS },
  { key: "buffer_zone.py", color: COLOR_MODELS },
  { key: "calendarEvents.py", color: COLOR_MODELS },
  { key: "date_recovery.py", color: COLOR_MODELS },
  { key: "email_notifier.py", color: COLOR_MODELS },
  { key: "gates.py", color: COLOR_MODELS },
  { key: "lotos_carwash_service.py", color: COLOR_MODELS },
  { key: "operation_scenario.py", color: COLOR_MODELS },
  // page
  { key: "page_add_phone_in_card.py", color: COLOR_PAGE },
  { key: "page_administrator_menu.py", color: COLOR_PAGE },
  { key: "page_admin_check_printing.py", color: COLOR_PAGE },
  { key: "page_bank_pincode.py", color: COLOR_PAGE },
  { key: "page_bill_dispenser_failed.py", color: COLOR_PAGE },
  { key: "page_bill_dispenser_take_change.py", color: COLOR_PAGE },
  { key: "page_birthday_input.py", color: COLOR_PAGE },
  { key: "page_card_balance.py", color: COLOR_PAGE },
  { key: "page_card_close.py", color: COLOR_PAGE },
  { key: "page_change_card.py", color: COLOR_PAGE },
  { key: "page_check_printing.py", color: COLOR_PAGE },
  { key: "page_company_reports.py", color: COLOR_PAGE },
  { key: "page_error.py", color: COLOR_PAGE },
  { key: "page_error_bill_acceptor.py", color: COLOR_PAGE },
  { key: "page_error_phone_is_binded.py", color: COLOR_PAGE },
  { key: "page_error_with_timer.py", color: COLOR_PAGE },
  { key: "page_exchange.py", color: COLOR_PAGE },
  { key: "page_info.py", color: COLOR_PAGE },
  
];

const linkDataArray = [
  { from: "app.py", to: "config.py" },
  { from: "config.py", to: "database.py" },
  { from: "database.py", to: "htmlpy_core" },
  { from: "htmlpy_core", to: "vmachine.py" },
  { from: "vmachine.py", to: "Objects" },
  { from: "vmachine.py", to: "Page" },
  { from: "Objects", to: "buffer_zone.py" },
  { from: "buffer_zone.py", to: "calendarEvents.py" },
  { from: "calendarEvents.py", to: "date_recovery.py" },
  { from: "date_recovery.py", to: "email_notifier.py" },
  { from: "email_notifier.py", to: "gates.py" },
  { from: "gates.py", to: "lotos_carwash_service.py" },
  { from: "lotos_carwash_service.py", to: "operation_scenario.py" },
  { from: "Page", to: "page_add_phone_in_card.py" },
  { from: "page_add_phone_in_card.py", to: "page_administrator_menu.py" },
  { from: "page_administrator_menu.py", to: "page_admin_check_printing.py" },
  { from: "page_admin_check_printing.py", to: "page_bank_pincode.py" },
  { from: "page_bank_pincode.py", to: "page_bill_dispenser_failed.py" },
  { from: "page_bill_dispenser_failed.py", to: "page_bill_dispenser_take_change.py" },
  { from: "page_bill_dispenser_take_change.py", to: "page_birthday_input.py" },
  { from: "page_birthday_input.py", to: "page_card_balance.py" },
  { from: "page_card_balance.py", to: "page_card_close.py" },
  { from: "page_card_close.py", to: "page_change_card.py" },
  { from: "page_change_card.py", to: "page_check_printing.py" },
  { from: "page_check_printing.py", to: "page_company_reports.py" },
  { from: "page_company_reports.py", to: "page_error.py" },
  { from: "page_error.py", to: "page_error_bill_acceptor.py" },
  { from: "page_error_bill_acceptor.py", to: "page_error_phone_is_binded.py" },
  { from: "page_error_phone_is_binded.py", to: "page_error_with_timer.py" },
  { from: "page_error_with_timer.py", to: "page_exchange.py" },
  { from: "page_exchange.py", to: "page_info.py" },
];

export default [nodeDataArray, linkDataArray];
